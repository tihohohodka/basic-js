const { NotImplementedError } = require('../extensions/index.js');
class myError extends Error {
  constructor(message) {
    super(message);
    
  }
}
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
if (!Array.isArray(arr)){
  throw new myError(`'arr' parameter must be an instance of the Array!`)
}
let newarr=[];
for (i=0;i<=arr.length-1;i++)
  { 
    if (arr[i]==='--discard-prev')
    {
      if (i!=0)
      {if (arr[i-2]!='--discard-next')
        {
          newarr.pop();  
        }
      }
    }
    else if (arr[i]==='--discard-next'){
    
        i++;
 
    }
    else if (arr[i]==='--double-next'){
      if (i<arr.length-1)
      {
      
      newarr.push(arr[i])
      newarr[i]=arr[i+1];
      }
    }
    else if (arr[i]==='--double-prev'){
    {if (i!=0)
      {if (arr[i-2]!='--discard-next'){
        newarr.push(arr[i])
        newarr[i]=newarr[i-1];}
      }
    }
    }else {newarr.push(arr[i])}




  }
return newarr
}

module.exports = {
  transform
};
