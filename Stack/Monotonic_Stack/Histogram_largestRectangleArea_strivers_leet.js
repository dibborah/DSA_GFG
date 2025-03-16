// Strivers(Medium)
// Leetcode(Hard)
// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */

// The naive or brute force approach
// TC: O(N^2)
class Solution1 {
    fun(arr) {
        const n = arr.length;
        let result = 0;
        
        for(let i = 0; i < n; i++) {
            let elementsCount = 1;
            for (let j = i - 1; j >= 0; j--) {
                if(arr[j] >= arr[i]) {
                    console.log(arr[i], arr[j])
                    elementsCount++;
                } else {
                    break;
                };
            };
            for (let j = i + 1; j < n; j++) {
                if(arr[j] >= arr[i]) {
                    console.log(arr[i], arr[j])
                    elementsCount++
                } else {
                    break;
                };
            };
            console.log(elementsCount);
            result = Math.max(result, (arr[i] * elementsCount));
        };
        return result;
    };
};

let largestRectangleArea = function(heights) {
  const solution = new Solution1();
  return solution.fun(heights);
};

// const heights = [2,1,5,6,2,3];
const heights = [2,4];
console.log(largestRectangleArea(heights));
