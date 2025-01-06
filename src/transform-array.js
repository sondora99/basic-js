const { NotImplementedError } = require('../extensions/index.js');

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
  /*--discard-next
  --discard-prev
  --double-next
  --double-prev*/
  if (!Array.isArray(arr)) {
     throw new Error("'arr' parameter must be an instance of the Array!"); }
  
     let result = []; 
     // флаг для пропуска элемента 
     let flag = false; 
     for (let i = 0; i < arr.length; i++) { 
      if (flag) { 
        flag = false; 
        continue; 
      } 
      switch (arr[i]) {
         case '--discard-next':
           flag = true;
            break;
         case '--discard-prev':
           if (result.length > 0 && arr[i - 2] !== '--discard-next') { 
            result.pop();
           } 
           break;
         case '--double-next':
           if (i + 1 < arr.length) {
             result.push(arr[i + 1]);
             } 
           break; 
         case '--double-prev':
           if (i > 0 && arr[i - 2] !== '--discard-next') {
             result.push(arr[i - 1]);
             }
           break; 
         default: result.push(arr[i]);
          break;
         }
        } 
      return result;

  }

module.exports = {
  transform
};
