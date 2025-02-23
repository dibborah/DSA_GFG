// GK: thunderClient api testing in the vs code ide itself

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// 56. Merge Intervals

/**
 *  @param {number[][]} intervals
 *  @return {number[][]}
 */

class Solution {
  checkIntervals(i1, i2) {
    let start = Math.max(i1[0], i2[0]);
    let end = Math.min(i1[1], i2[1]);
    return start <= end;
  };
  fun(arr) {
    const n = arr.length;
    const result = [];
    for(let i = 1; i < n; i++) {
      const temp = [];
      if(arr[i - 1][1] > arr[i][0]) {
        temp.push(arr[i - 1][0]);
        temp.push(arr[i][1]);
        result.push(temp);
      } else {
        result.push(arr[i]);
      };
    };
    return result;
  };
};

const merge = function(intervals) {
  const solution = new Solution();
  return solution.fun(intervals);
};

const intervals = [[1,3],[2,6],[8,10],[9,18]];

// const intervals = [[1,4],[4,5]];
// Output: [[1,6],[8,10],[15,18]]

console.log(merge(intervals));


// Write a code to return true if the two intervals passed overlap or not

// const i1 = [5, 10];
// const i2 = [1, 7]

// const i1 = [16, 20];
// const i2 = [5, 15];

