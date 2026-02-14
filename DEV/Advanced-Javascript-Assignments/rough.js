
function greet(name, callback) {
  callback(name)
}

greet("Shaurya", function (name) {
  console.log("Hello", name)
})

greet("Aman", (name) => { console.log("Hello", name) })