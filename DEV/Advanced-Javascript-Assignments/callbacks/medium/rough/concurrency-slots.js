
const MAX = 3; // maximum allowed parallel tasks
let running = 0; // how many tasks currently occupying slots
const queue = []; // stores waiting taks when poll is full

/* runTask helps handle asynchronous task */
function runTask(task) {
  /* Promise is what actually helping to achieve parallellism */
  return new Promise(resolve => {
    /* we intially pushing tasks into job poll */
    queue.push({ task, resolve })
    /* tryStart is picking tasks from queue & making sure we're running 3 tasks parallelly */
    tryStart();
  })
}

/* tryStart is engine making sure parallel execution is being computed properly. */
function tryStart() {
  /* if all slots full/no waiting tasks then stop. */
  if (running >= MAX || queue.length == 0) return;

  /* launching first waiting task from queue */
  const { task, resolve } = queue.shift()
  /* updating semaphore, UP */
  running++;

  /* operations being performed when tasks finishes */
  task()
    /* resolving promise returned by task */
    .then(resolve)
    /* after tasks complete, free slot, immediately try launching queued task */
    .finally(() => {
      /* updating semaphore, DOWN */
      running--
      /* as one finish, initiate another one. */
      tryStart()
    })
}