/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
  -npm run test-count-vowels
*/

function countVowels(str) {

  const array = str.toLowerCase().split('').sort()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const common = array.filter(item => vowels.includes(item))
  return common.length
}

module.exports = countVowels;