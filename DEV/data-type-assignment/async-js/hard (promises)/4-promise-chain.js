/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { wait1, wait2, wait3 } = require("./3-promise-all");

async function calculateTime(t1, t2, t3) {
  const start = Date.now()
  await wait1(t1)
  await wait2(t2)
  await wait3(t3)
  const stop = Date.now()
  return stop - start
}

module.exports = calculateTime;

calculateTime(1, 2, 3).then((time) => {
  console.log(time)
})