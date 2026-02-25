/* callback/asynchronous */
function greet(name) {
  console.log("Hello " + name);
}

greet("Shaurya");

function processUser(callback) {
  callback("Shaurya");
}

/* JS is tricky language */

setTimeout(function () {
  console.log("Done after 2 seconds.");
}, 2000);

processUser(greet);
greet(processUser);

/* closure, when function remembers variables from its outer scope even after outer function has finished executing */

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

sleep(2000).then(data => console.log(data));
counter();
counter();
counter();

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Resolved"), ms);
    console.log("inside sleep");
  });
}

/* execution flow */
console.log("1");
setTimeout(() => console.log("2"), 1000);
Promise.resolve().then(() => console.log("3"));
console.log("4");

/* Queue, linear data structure follows FIFO principle-first in first out */

let queue = []; //don't have to give fixed size to it
let front = 0;
let rear = 0;

function enqueue(x) {
  queue[rear] = x;
  rear++;
}

function dequeue() {
  return queue[front++];
}

function peek() {
  return queue[front];
}

enqueue(45);
console.log(dequeue());

/* js built-in alternative */
queue.push(10);
console.log(queue.shift());