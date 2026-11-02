const { NotImplementedError } = require('../lib');

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
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : "+";
  let addition = [];
  if (options.addition !== undefined) {
    addition = String(options.addition);
  } 
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  const additionPart = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (options.addition !== undefined) {
      additionPart.push(addition);
    }
  }
  const result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str) + additionPart.join(additionSeparator));
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
