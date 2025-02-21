// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.


/**
 * @param {number[]} nums
 * @return {number}
 */

// Output: 3

// Input: nums = [1,0,1,1,0,1]
// Output: 2

class Solution {
  // brute force approach done
  //   O(n^2)
  //   fun(nums) {
  //     let ans = 0;
  //     for(let i = 0; i < nums.length; i++) {
  //       let temp = 0;
  //       let k = i;
  //       while(nums[k] === 1) {
  //         temp++;
  //         k++;
  //       }
  //       ans = Math.max(ans, temp);
  //     };
  //     return ans;
  //   };

    // optimized appoach ()
    // O(n)
    fun(nums) {
      let ans = 0;
      let temp = 0;
    //   for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] === 0) {
    //       ans = Math.max(ans, temp);
    //       temp = 0;
    //     } else {
    //         temp++;
    //     }
    // }
      for(const num of nums) {
        if(num === 0) {
          temp = 0;
        } else {
          temp++;
          ans = Math.max(ans, temp);
        };
      };
      return ans;
   };
};  

var findMaxConsecutiveOnes = function(nums) {
  const solution = new Solution();    
  return solution.fun(nums);
};

const nums = [1,1,0,1,1,1];
// const nums = [1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(nums));