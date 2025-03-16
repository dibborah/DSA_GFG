// NGE
// Strivers (Stack and Queue)
// Leetcode

// Leetcode Q.No. and problem statement
// 496. Next Greater Element I(NGE)

// ---------

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

// -----------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Naive or Brute force approach
// TC: for element of arr1 we are running two loop in arr2
// 1st to find the arr1 element in arr2 and then to find the next greater element of it
// So the inner loop TC: will be O(M + M) => O(2M) => O(M)
// The TC of the outer loop is clear O(N)
// So Total TC: O(N * M)
// SC: O(N): We would need that to store and return the result
// We as a good practice never manipulate the given array unless it is told to 
class Solution1 {
    // Brute force approach
    fun(arr1, arr2) {
        const n = arr1.length;
        const m = arr2.length;

        const result = new Array(n).fill(-1);
        console.log(result);

        for(let i = 0; i < n; i++) {
            const num = arr1[i];

            for(let j = 0; j < m; j++) {
                if(num === arr2[j]) {
                    for(let k = j + 1; k < m; k++) {
                        if(arr2[k] > num) {
                          result[i] = arr2[k];
                          break;
                        };
                    };
                };
            };

        };

        return result;
    };
};

let nextGreaterElement1 = function(nums1, nums2) { 
  const solution = new Solution1();
  return solution.fun(nums1, nums2);
};

// Test cases
// const nums1 = [4,1,2], nums2 = [1,3,4,2];
// const nums1 = [2,4], nums2 = [1,2,3,4];
// const nums1 = [4,1,2], nums2 = [1,2,3,4];

// console.log(nextGreaterElement(nums1, nums2));



// Optimised Approach(NGE of 2 array)
// Using MONOTONIC STACK

// TC: To find the monotonic stack is O(N + N) => O(2N) => O(N) and to make the result array is O(N) since we need to traverse the first array
// Total TC will be O(N) + O(N) => O(2N) => O(N)
// SC: 2 array we are creating 1 Stack O(M) , 1 Map O(M), 1 result O(N) : O(M + M + N) =>O(2M) +  O(N) => O(M) + O(N). Since M >N or 
// Total SC: O(M)

class Solution2 {
    fun(arr1, arr2) {
        const m = arr2.length;
        const nge = new Map();
        const stack = new Array();
        const result = [];

        for(let i = m - 1; i >= 0; i--) {
            while(stack.length !== 0 && stack.at(-1) <= arr2[i]) {
                stack.pop();
            };
            if(stack.length === 0) {
                nge.set(arr2[i], -1);
            }else {
                nge.set(arr2[i], stack.at(-1));
            };
            stack.push(arr2[i]);
        };

        for(const num of arr1) {
          result.push(nge.get(num));
        };
        return result;
    };
};

let nextGreaterElement2 = function(nums1, nums2) { 
    const solution = new Solution2();
    return solution.fun(nums1, nums2);
};
  

// Test cases
// const nums1 = [4,1,2], nums2 = [1,3,4,2];
// const nums1 = [2,4], nums2 = [1,2,3,4];
// const nums1 = [4,1,2], nums2 = [1,2,3,4];
const nums1 = [1,3,5,2,4], nums2 = [6,5,4,3,2,1,7];

console.log(nextGreaterElement2(nums1, nums2));
