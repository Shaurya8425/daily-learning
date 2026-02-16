// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) { //fn=original function that returns promise

  return function (...args) { //new function that's being returned, capturing any arguments passed when calling this new function
    return fn(...args) //1st attempt
      .catch(() => { //on failure of 1st attempt
        return fn(...args) //2nd attempt i.e., retry parellelly we're returning result that will be a promise
      })
  }
}

module.exports = retryOnce;
