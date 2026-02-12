// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('node:fs')

fs.readFile("../easy/file.txt", 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
  const edited = data.replace(/\s+/g, ' ').trim()
  console.log(edited)
  
  fs.writeFile("../easy/file.txt", edited, err => {
    if (err) {
      console.log(err)
    } else {
      // file written successfully
    }
  })
})


/* const edit = clean.replace(/\s+/g, "")
console.log(edit)
fs.writeFile("../easy/file.txt", edit, err => {
  if (err) {
    console.log(err)
  } else {
    // file written successfully
  }
}) */