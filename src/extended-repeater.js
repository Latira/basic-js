const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // let result = str + "";
  // function addition(add, repeatAdd, addSep) {
  //   if (options.hasOwnProperty("addition")) {
  //     if (options.hasOwnProperty("additionRepeatTimes")) {
  //       for (let j = 1; j < repeatAdd; j++) {
  //         result = result + add;
  //         if (options.hasOwnProperty("additionSeparator")) {
  //           result = result + addSep;
  //         }  else {
  //           result = result + "|";
  //           console.log('addition repeat cycle + sep', result);
  //         }
  //         console.log('addition repeat cycle', result);
  //       }
  //     } 
  //     result = result + options.addition;
  //     console.log('addition cycle', result);
  //   }
  // }
  // for (let i = 1; i < options.repeatTimes; i++) {
  //   addition(options.addition, options.additionRepeatTimes, options.additionSeparator);
  //   if (options.hasOwnProperty("separator")) {
  //     result = result + options.separator + str;
  //     console.log('separator cycle', result);
  //   } 
  //   else {
  //     result = result + "+" + str;
  //     console.log('cycle', result);
  //   }
  // }
  // addition(options.addition, options.additionRepeatTimes, options.additionSeparator);
  // return result;
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater
};
