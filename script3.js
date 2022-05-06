/*In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
Examples
kmtomiles(2) ➞ 1.24274
kmtomiles(6) ➞ 3.72823
kmtomiles(8) ➞ 4.97097
*/
function convert(num) {
  let result = num * 0.62137;
  return result.toFixed(5);
}
console.log(convert(2));
