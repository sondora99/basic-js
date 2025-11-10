const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
<<<<<<< HEAD
function getSumOfDigits(n) {
  if (n < 10) {
    return n
  };
  
  while (n >= 10){
    let temp = 0;
    while (n > 0) {
      temp += n % 10;
      n = Math.floor(n / 10)
    }
  n = temp;
  }
  return n
=======
function getSumOfDigits(/* n */) {
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
>>>>>>> upstream/master
}

module.exports = {
  getSumOfDigits
};
