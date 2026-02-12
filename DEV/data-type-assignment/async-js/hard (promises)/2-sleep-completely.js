/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let p = new Promise((resolve, reject) => {
    const start = Date.now()
    while (Date.now() - start < milliseconds) {

    }

    // it doesn't block the main thread as it's thrown into call back & thread move on to doing next thing.
    /* setTimeout(()=>{
      console.log(`After ${milliseconds} milliseconds: `,milliseconds)
    })
    resolve() */
  })
  return p
}

module.exports = sleep;

console.log("start")
sleep(2000).then(()=>console.log("end"))
console.log("This will not run until sleep finishes.")