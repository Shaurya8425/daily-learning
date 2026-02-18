function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DATA RECEIVED")
    }, 1000)
  })
}
async function loadData() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}
/* just writing async function doesn't call/invoke itself you'll have to do it manually. */
loadData()