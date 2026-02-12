// Using `1-counter.js` or `2-counter.js` from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const showTime = () => {
  const now = new Date()

  const hrs = String(now.getHours()).padStart(2, "0")
  const mins = String(now.getMinutes()).padStart(2, "0")
  const secs = String(now.getSeconds()).padStart(2, "0")

  process.stdout.cursorTo(0, 0)
  process.stdout.clearScreenDown()

  process.stdout.write(`${hrs}:${mins}:${secs}\n`)
  process.stdout.write(`${Number(hrs) > 12 ? hrs - 12 : hrs}:${mins}:${secs} ${Number(hrs) - 12 <= 0 ? "AM" : "PM"}`)
}
setInterval(showTime, 1000)