const { NotImplementedError } = require('../extensions/index.js');
class myError extends Error {
  constructor(message) {
    super(message);
    
  }
}
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
function getSeason(date=1) {

if ((!(date instanceof Date))||isNaN(date)||(Object.prototype.toString.call(date) !== "[object Date]")){throw new myError("Invalid date!") }
if ((!(date instanceof Date))||(date===1)||(typeof date === 'undefined')||(typeof date === 'null')){ return 'Unable to determine the time of year!'};


if (date.getMonth()>=0&&date.getMonth()<=1||date.getMonth()===11){
  return 'winter'
} else if (date.getMonth()>=2&&date.getMonth()<=4){
  return 'spring'
} else if (date.getMonth()>=5&&date.getMonth()<=7){
  return 'summer'
}else if((date.getMonth()>=7&&date.getMonth()<=10)){return 'autumn (fall)'}
;
if (date<=0){throw new myError("Invalid date!") }

}

module.exports = {
  getSeason
};
