/*Use destructuring assignment with the rest parameter sub-array of the original array source with the first two elements omitted*/
function subArray(array) {
  let [, , ...rest] = array;
  return rest;
}
arr1 = [1, 2, 3, 4, 5];
console.log(subArray(arr1));
