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
<<<<<<< HEAD
function repeater(str, options) {
  const repeatTimes = options.repeatTimes;
  const separator = options.separator || '+';
  const addition = 'addition' in options ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let addPart = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let mainPart = Array(repeatTimes).fill(str + addPart).join(separator);

  return mainPart

=======

function repeater(/* str, options */) {
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
>>>>>>> upstream/master
}

module.exports = {
  repeater
};
