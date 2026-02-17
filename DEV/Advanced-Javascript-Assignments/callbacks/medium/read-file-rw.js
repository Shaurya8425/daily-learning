import fs from "fs"

/* it using older way of callback via (err,data)=>{} */
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

function readFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
const result = await readFileAsync("sample.txt")
console.log(result.toString())