// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.


class CallbackPool {
  /* method which initiate object property */
  constructor(limit) {
    this.limit = limit;
    this.active = 0;
    this.queue = [];
  }

  /* function which can be called by new object */
  run(task, onComplete) {
    this.queue.push({ task, onComplete });
    this._next();
  }

  /* private function which holds computational logic of managing tasks */
  _next() {
    if (this.active >= this.limit || this.queue.length === 0) return;
    const { task, onComplete } = this.queue.shift();
    this.active++;
    task((result) => {
      this.active--;
      onComplete(result);
      this._next();
    })
  }
}

module.exports = CallbackPool;
