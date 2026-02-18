
/* these promise will get resolved in 1,2 & 3 sec. */
const p1 = new Promise(res => setTimeout(() => res("A"), 3000))
const p2 = new Promise(res => setTimeout(() => res("B"), 1000))
const p3 = new Promise(res => setTimeout(() => res("C"), 2000))

/* what race method does is it start watching all 3 promises simultaneously, not waiting for all waiting for 1st one to finish. */
Promise.race([p1, p2, p3])
  .then(result => console.log(result))

const q1 = Promise.resolve("OK")
const q2 = Promise.reject("FAILED")
const q3 = Promise.reject("DONE")

/* allSettled make sure it waits for every promise to get resolved/rejected in other words to get finished. */
Promise.allSettled([q1, q2, q3])
  .then(result => console.log(result))