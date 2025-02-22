// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count inversions in the array.
    inversionCount(arr) {
      let count = 0;
      for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
          if(arr[i] > arr[j]) {
            count++;
          };
        };
      };
      return count;
    };
  };
  
const nums = [10, 10, 10];
const solution = new Solution();
console.log(solution.inversionCount(nums));
