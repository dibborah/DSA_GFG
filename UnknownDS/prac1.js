// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */

class Solution {
  fun(nums) {
    for(const num of nums) {
        console.log(num);
    };
  };
};

// #Note: JavaScript arrays are sparse arrays, meaning they don't have to be contiguous or filled with values at every index.

let largestRectangleArea = function(heights) {
    const solution = new Solution();
    return solution.fun(heights);
};

// Input: heights = [2,1,5,6,2,3]
// Output: 10

const heights = [2,1,5,6,2,3];

// consecutive larger number

console.log(largestRectangleArea(heights));
