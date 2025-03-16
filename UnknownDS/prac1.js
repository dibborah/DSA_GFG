
// Strivers
// Leetcode Question number and statement:
// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// The solution is not yet fine

class Solution {
    fun(arr1, arr2) {
        const n = arr1.length;
        const m = arr2.length;

        const result = new Array(n).fill(-1);
        console.log(result);

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
              if(arr1[i] === arr2[j] && arr2[j + i] && arr2[j + i] > arr1[i]) {
                result[i] = arr2[j + i];
                break;
              };
            };
        };

        console.log(result)

        return result;
    };
};

let nextGreaterElement = function(nums1, nums2) { 
  const solution = new Solution();
  return solution.fun(nums1, nums2);
};

// const nums1 = [4,1,2], nums2 = [1,3,4,2];

const nums1 = [2,4], nums2 = [1,2,3,4];

console.log(nextGreaterElement(nums1, nums2));