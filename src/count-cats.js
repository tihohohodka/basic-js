const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(boxes) {
  let number=0;
  for (i=0;i<boxes.length;i++)
    {
      for (j=0;j<boxes[i].length;j++)
      {
        if (boxes[i][j]==='^^')
        {
          number++;
        }
      }
    }
return number
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
