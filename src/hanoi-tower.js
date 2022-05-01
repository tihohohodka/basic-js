const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks,turnsSpeed) {
 let speed=turnsSpeed;
 speed=3600/speed;
 let iterations=Math.floor(2**disks-1);
 return {'turns':iterations,'seconds':Math.floor(speed*iterations)}


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
