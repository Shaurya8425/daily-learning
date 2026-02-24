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

counter();
counter();
counter();

sleep(5)