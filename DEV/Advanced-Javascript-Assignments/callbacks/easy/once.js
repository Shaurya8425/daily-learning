// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

// fn = callback-based asynchronous function
function once(fn) {
  let called = false //flag which make sure any subsequent calls shouldn't re-execute fn
  let result
  let error
  /* variables to store the output of callback from first invocation */
  let waiting = [] //stores other invocation

  return function (callback) { //returning function that remembers past execution and behaves differently over time

    if (called) { //if called=true means it already invoked first time; cached result will get returned
      callback(error, result) //delivers cached data by invoking user's function with stored values
      return
    }

    waiting.push(callback) //storing other invokation while making sure fn don't get re-execute

    if (waiting.lenght === 1) { //make sure 1st invocation don't get interrupted & subsequent ones r in waiting queue
      fn((error, res) => { //calling real async function

        called = true //turn flag to avoid running again
        error = err
        result = res
        /* cached both result */

        waiting.forEach(cb => cb(error, result)) //go through all queued callbacks, call each one with same cached values
        waiting = [] //free array
      })
    }
  }
}

module.exports = once;
