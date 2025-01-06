const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // let code = str.split('');
  // let counts = new Map;
  // let count;
  // let result = "";
  // for (let i = 0; i < code.length; i++) {
  //   if (counts.has(code[i])) {
  //     count = counts.get(code[i])
  //     count++;
  //     counts.set(code[i], count);
  //   } else {
  //     counts.set(code[i], 1);
  //   }
  // }
  // counts.forEach((value, key, map) => {
  //   result = result + value + key;
  // });
  // return result;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      let n = 2;
      while (str[i] === str [i+n]) {
        n++;
      }
      result = result + n + str[i];
      i = i + n - 1;
    } else {
      result = result + str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
