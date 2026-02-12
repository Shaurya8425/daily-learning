function KmMCm(v, m) {
  if (m === "m")
    return v * 1000;
  else if (m === "cm")
    return v * 1000000;
  else
    return "Something went wrong..."
}
// km -> m, cm
// just multiply by 1000, 100
console.log(KmMCm(1, "m"));
console.log(KmMCm(1, "cm"));

// to use require u need to create interface & so on
const value = require("readline")
const measurement = require("readline")
// console.log(KmMCm(value, measurement))

const km = Number(process.argv[2])
const unit = process.argv[3]

console.log(KmMCm(km, unit))

// r -> cirlce area
function CircleArea(r) {
  return 3.14 * r * r;
}

// n -> arithmentic operations
function Calc(n1, n2, op) {
  if (op === "+")
    return n1 + n2
  if (op === "-")
    return n1 - n2
  if (op === "*")
    return n1 * n2;
  if (op === "/")
    return n1 / n2;
  if (op === "%")
    return n1 % n2;
}

// n1,n2 -> sum & avg
function marks(n1, n2) {
  sum = n1 + n2;
  avg = (n1 + n2) / 2;
  return { sum, avg };
}
console.log(marks(23, 34))

// l,b -> rectangle area
function RectangleArea(l,b){
  return l*b;
}

// n1,n2...nn -> avg
console.log("Enter amount: ")
const num = Number(process.argv[2])
const nums = Number(process.argv[num])

// function Avg()