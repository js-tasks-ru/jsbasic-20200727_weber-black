/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let x = 1;
    while(n) x *= n--;
    return x;
}

