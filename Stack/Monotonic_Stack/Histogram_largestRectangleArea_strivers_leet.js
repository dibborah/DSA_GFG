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

let largestRectangleArea1 = function(heights) {
  const solution = new Solution1();
  return solution.fun(heights);
};


const heights1 = [2,1,5,6,2,3];
// const heights1 = [2,4];
// console.log(largestRectangleArea1(heights1));


class Solution2 {
    findNSEIndices(arr) {
        const n = arr.length;
        const stack = [];
        const result = [];
        for(let i = n - 1; i >= 0; i--) {
            while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
                stack.pop();
            };
            if(stack.length === 0) {
                result[i] = n;
            } else {
                result[i] = stack.at(-1)
            };
            stack.push(i);
        };
        return result;
    }
    findPSEIndices(arr) {
        const n = arr.length;
        const stack = [];
        const result = [];
        for(let i = 0; i < n; i++) {
            while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
                stack.pop();
            };
            if(stack.length === 0) {
                result[i] = -1;
            } else {
                result[i] = stack.at(-1);
            };
            stack.push(i);
        };
        return result;
    }
    fun(arr) {
      const nse = this.findNSEIndices(arr);
      const pse = this.findPSEIndices(arr);

      let result = 0;

      for (let i = 0; i < arr.length; i++) {
        result = Math.max(result, arr[i] * ((nse[i] - pse[i]) - 1));
      };
      return result;
    };
};


let largestRectangleArea2 = function(heights) {
    const solution = new Solution2();
    return solution.fun(heights);
};

// Test cases 
// const heights2 = [2,1,5,6,2,3];
// const heights2 = [2,4];

// console.log(largestRectangleArea2(heights2));


class Solution3 {
    fun(arr) {
      const stack = [];
      const n = arr.length; 

      let maxArea = 0;

      for(let i = 0; i < n; i++) {
        while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
            const element = stack.pop();
            const nse = i;
            const pse = stack.length === 0 ? -1 : stack.at(-1);
            maxArea = Math.max((arr[element] * (nse - pse - 1)), maxArea);
        };
        stack.push(i);
      };

      console.log(maxArea);

      while(stack.length !== 0) {
        const element = stack.pop();
        const nse = n;
        const pse = stack.length === 0 ? -1 : stack.at(-1);
        maxArea = Math.max(arr[element] * (nse - pse - 1), maxArea);
      };

      return maxArea;
    };
};


let largestRectangleArea3 = function(heights) {
    const solution = new Solution3();
    return solution.fun(heights);
};

// Test cases 
// const heights3 = [2,1,5,6,2,3];
const heights3 = [2,4];

console.log(largestRectangleArea3(heights3));
