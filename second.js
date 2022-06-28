// To find the index of an element from an array

let arr = [2, 4, 1, 4, 68, 7];
let elem = 4;
function findIndex(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
}
console.log(findIndex(arr, elem));
