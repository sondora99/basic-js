const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // Remove line below and write your code here
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const dat = new Date(date);

  if (isNaN(dat.getTime())) {
    return 'Unable to determine the time of year!';
  }

  const month = dat.getMonth();
  let result;
  if (month >= 0 && month < 2 || month === 11){
    result = 'winter'
  } else if (month >= 2 && month < 5) {
    result = 'spring'
  } else if (month >= 5 && month < 8) {
    result = 'summer'
  } else if (month >= 8 && month <= 10) {
    result = 'autumn'
  } else (result = 'Invalid date!')
  return result;
}

module.exports = {
  getSeason
};
