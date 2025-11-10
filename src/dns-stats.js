const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
<<<<<<< HEAD
function getDNSStats(domains) {
  let result = {};

  domains.forEach(domain => {
    const temp = domain.split('.').reverse();
    let acc = '';

    temp.forEach(element => {
      acc += `.${element}`;
      result[acc] = (result[acc] || 0) + 1;
    })
  })
  return result;

=======
function getDNSStats(/* domains */) {
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
>>>>>>> upstream/master
}

module.exports = {
  getDNSStats
};
