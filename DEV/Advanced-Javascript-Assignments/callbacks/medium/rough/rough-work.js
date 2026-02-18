
/* fetchData is simulating a delayed response which happens in real world in API calls, file reading, timers, database queries */
function fetchData(callback) {
  /* setTimeout is method which delay code execution by specified time in ms. that's actual technicality of delayed response. */
  setTimeout(() => {
    callback(null, "DATA RECEIVED")
    /* called callback with 2 parameters null, "DATA RECEIVED which is faking of fetched data." */
  }, 1000)
}

fetchData((error, data) => {
  /* invoked with arrow function with error, data parameters */
  if (error) return console.log(error)
  console.log(data)
  /* operations which r being performed on parameter that basically is on fetched data.*/
})

/* fetchDataPromise is function that returns promise in other words it says to main thread go do your work whatever output/value will be i'll return later. Value could be data/error. */
function fetchDataPromise() {
  /* "promise new Promise((resolve,reject)=>{})" is way of writing promise. */
  return new Promise((resolve, reject) => {
    /* setTimeout simulates asynchronous task*/
    setTimeout(() => {
      /* resolve will return value on success which promise promises to the main thread. */
      resolve("DATA RECEIVED; inside fetchDataPromise.")
    }, 1000)
  })
}

console.log("Before fetchDataPromise")
/* i'm calling/invoking fetchDataPromise which returns promise hence .then/.catch is used to get value they return.*/
fetchDataPromise()
  /* .then() is used when u succeed in resolving while .catch() when u had to face error */
  // .then(data => console.log(data))
  .catch(err => console.log(err))
console.log("After fetchDataPromise")

/* Note:-
if u can answer why you're getting out in this perticular order then you've understood asyncronous execution.
Before fetchDataPromise
After fetchDataPromise
DATA RECEIVED
DATA RECEIVED; inside fetchDataPromise.
*/

async function loadDataAsync() {
  try {
    const data = await fetchDataPromise()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}