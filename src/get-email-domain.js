const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
<<<<<<< HEAD
function getEmailDomain(email) {
  const separator = email.lastIndexOf('@');
  return email.slice(separator+1)
=======
function getEmailDomain(/* email */) {
  throw new NotImplementedError('Not implemented');
>>>>>>> upstream/master
}

module.exports = {
  getEmailDomain
};
