const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let max = String(n).slice(1);
  let sliced = max;
  for (let i = 2; i <= String(n).length; i++) {
    sliced = String(n).slice(0, i-1) + String(n).slice(i);
    if (sliced >= max) {
      max = sliced;
    }
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};
