const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(current) {
if (typeof(current)!='string') {return false};
  current = parseFloat(current,10);

if (!current) {return false};
if (isNaN(current)) {return false};
if (current<=0||current>15){return false};
let age = Math.ceil(Math.log(MODERN_ACTIVITY/current)/(0.693/HALF_LIFE_PERIOD));
//let age = Math.ceil((Math.log(current/MODERN_ACTIVITY))/(0.693/HALF_LIFE_PERIOD))
return age

 
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};

