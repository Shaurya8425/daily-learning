import fs from "fs"

/* it's using older way of callback that is (err,data)=>{} */
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

/* using promise to change old callback way of readFileAsync*/
function readFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    /* we just wrapped old callback way into promise whose responses (error, data) is now being returned via reject/resolve. */
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
/* because we've returning promise that's why i'm able to await in result */
const result = await readFileAsync("sample.txt")
console.log(result)