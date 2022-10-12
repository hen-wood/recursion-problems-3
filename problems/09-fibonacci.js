/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55

edge case checker:
if (n === 0) {
    debugger
    return 0
  } else
***********************************************************************/

function fibonacci(n, starter = [0, 1]) {
  debugger
  if (starter.length > n) {
    debugger
    return starter.pop()
  }
  debugger
  let num1 = starter[starter.length - 2]
  let num2 = starter[starter.length - 1]
  debugger
  starter.push(num1 + num2)
  return fibonacci(n, starter)
}
fibonacci(10); // 55
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
