/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten(); // [1, 2, 3]
***********************************************************************/



// arr === [1, [2, [3]]]

// element === [2,[3]]

// arr === [1, 2, [3]]

// element = [3]

// arr === [1, 2, 3]
function flatten(arr) {
  debugger
  let areAnyArraysLeft = arr.some(el => typeof el === 'object')
  debugger
  if (!areAnyArraysLeft || arr.length === 0) {
    debugger
    return arr
  }
  debugger
  let element = arr.shift()
  debugger
  arr = arr.concat(element)
  debugger
  return flatten(arr)
}
// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2], [4, 5, [6, 7]], [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
