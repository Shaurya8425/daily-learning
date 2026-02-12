// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('node:fs')
const path = require("node:path")

// path.join(__dirname, "file.txt")

fs.readFile("easy/file.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return;
  }
  console.log(data);
})

let sum = 0
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
console.log("🔥 loop finished")

/* try {
  const data = fs.readFileSync('easy/file.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.log(err)
} */

// not an expensive operation
/* const stop = 1;
setTimeout(() => {
  console.log()
}, stop * 1000) */

// console.log(process.cwd())