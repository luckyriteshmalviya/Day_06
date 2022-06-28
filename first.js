// To find the largest pair of the 2 elements using indexing with sorted elements

let arr = [111, 2, 3, 4, 21, 65, 7, 8, 9];
function largestPair(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] + arr[arr.length - 2];
}

console.log(largestPair(arr));
