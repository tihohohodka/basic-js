const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
let name=[];
if (typeof(members)!='array'){ return false};
for (i=0;i<=members.length-1;i++)
  {
    
    if (typeof(members[i])=='string'){
      members[i][0]=members[i][0].toUpperCase();
      name.push(members[i][0].toUpperCase());

    }
    
   

  }
name.sort();
if (!name){return false}
name = name.join('');
return name



  // remove line with error and write your code here



}

module.exports = {
  createDreamTeam
};
