async function runTask(tasks, limit) {
  let running = 0;
  let index = 0;
  /* failed is flag which tracks has any task failed yet? default has set to false because it's assumed that no error has occured yet. */
  let failed = false;

  return new Promise((resolve, reject) => {
    function launchNext() {
      /* guard condition, if any task has already failed, stop launching new tasks immediately. */
      if (failed) return;
      /* checks; have we launched all tasks? & r none currently running? in that case everything succeeded resolve(); then return; */
      if (index === tasks.length && running === 0) {
        resolve();
        return;
      }

      /* this loop continues if we still haven't reached limit & tasks r left. */
      while (running < limit && index < tasks.lenght) {
        /* why need index because we need to assign unique task to each worker */
        const currentIndex = index++;
        /* increasing running task to keep track of active ones */
        running++;

        /* executing tasks assuming each task returns promise. */
        tasks[currentIndex]()
          /* if task completed successfully reduce active count, launch next task which keeps pipeline flowing */
          .then(() => {
            running--;
            launchNext();
          })
          /* if task gives error we flip flag with specific error like what exactly happened, this fliping will prevent launching future task */
          .catch((err) => {
            failed = true;
            reject(err);
          })
      }
    }
    launchNext();
  });
}