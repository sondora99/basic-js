const { NotImplementedError } = require('../lib');

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
<<<<<<< HEAD
function encodeLine(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++){
    let temp = str[i];
    if (str[i + 1] === temp){
      count += 1
    } else {
      if (count === 1) {
        result += temp
      } else {
      result += count + temp
      count = 1; }
    }
  }
  return result;

=======

function encodeLine(/* str */) {
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
>>>>>>> upstream/master
}

module.exports = {
  encodeLine
};
