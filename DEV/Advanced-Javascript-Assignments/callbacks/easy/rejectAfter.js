// Problem Description – rejectAfter(ms, callback)
//
// You are required to create a function named rejectAfter that accepts a time
// duration in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback
// with an error.

function rejectAfter(ms, callback) {
  setTimeout(() => {
    callback(new Error("Operation timed out"))
    /* const err = new Error("Operation timed out")
    callback(err) */
  }, ms)
}

module.exports = rejectAfter;
