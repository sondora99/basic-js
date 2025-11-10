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
  const str = n.toString();
  const strArr = str.split('');
  let numArr = strArr.map(element => Number(element));
  let maxNum = 0;
  for (let i = 0; i < numArr.length; i++) {
    let tempArr = numArr.slice();
    delete tempArr[i];
    let res = Number(tempArr.join(''))
    if (res > maxNum) {
      maxNum = res;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
