// GK: thunderClient api testing in the vs code ide itself
// GK2: Read that book : How to win and influence people
// I am clearly doing some great mistakes in connecting with people
// Will have to fix them

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// 56. Merge Intervals

/**
 *  @param {number[][]} intervals
 *  @return {number[][]}
 */


// This is the brute force approch I was trying 
// It is not completed yet

// class Solution {
//   checkIntervals(i1, i2) {
//     let start = Math.max(i1[0], i2[0]);
//     let end = Math.min(i1[1], i2[1]);
//     return start <= end;
//   };
//   fun(arr) {
//     const n = arr.length;
//     const result = [];
//     for(let i = 0; i < n; i++) {
//       const temp = [];;
//       for(let j = i + 1; j < n - 1; j++) {
//         if(this.checkIntervals(arr[i], arr[j])) {
//             const start = Math.min(arr[i][0], arr[j][0]);
//             temp.push(start);
//             const end = Math.max(arr[i][1], arr[j][1]);
//             temp.push(end);
//             result.push(temp);
//             arr.splice(j, 1)
//         };
//       };
//     };
//     return result;
//   };
// };

// const merge = function(intervals) {
//   const solution = new Solution();
//   return solution.fun(intervals);
// };

// // const intervals = [[1,3],[2,6],[8,10],[9,18]];

// const intervals = [[1,4],[4,5]];
// // Output: [[1,6],[8,10],[15,18]]

// console.log(merge(intervals));


// Write a code to return true if the two intervals passed overlap or not

// const i1 = [5, 10];
// const i2 = [1, 7]

// const i1 = [16, 20];
// const i2 = [5, 15];




// The efficient solution on the go
class Solution {
    myComp(a, b) {
      if(a[0] < b[0]) return -1;
      if(a[0] > b[0]) return 1;
      return 0;
    };
    mergeWithComparitor(arr, low, mid, high) {
      const n1 = mid - low + 1;// Try to understand this some day
      const n2 = high - mid;
      const part1 = [];
      const part2 = [];
  
      for(let i = 0; i < n1; i++) { // mid - low + 1 is crucial ... vs mid + 1
        part1[i] = arr[low + i];
      };
      for(let i = 0; i < n2; i++) {
        part2[i] = arr[mid + i + 1];
      };
  
      let i = 0;
      let j = 0;
      let k = low; // k = low is also  crucial vs k = 0
      while(i < part1.length && j < part2.length) {
          if(this.myComp(part1[i], part2[j]) <= 0) {
              arr[k] = part1[i];
              i++;
          } else {
              arr[k] = part2[j];
              j++;
          };
          k++;
      };
  
      while(i <  part1.length) {
          arr[k] = part1[i];
          i++;
          k++;
      };
      while(j < part2.length) {
          arr[k] = part2[j];
          j++;
          k++;
      };
    };
    mergeSorting2DArray(arr, left, right) {
      if(right > left) {
        const mid = Math.floor(left + ((right - left) / 2));
        this.mergeSorting2DArray(arr, left, mid);    
        this.mergeSorting2DArray(arr, mid + 1, right);
        this.mergeWithComparitor(arr, left, mid, right);
      };
    };
    printOverlappingIntervals(arr) {
      this.mergeSorting2DArray(arr, 0, arr.length - 1);
      let result = 0;
      for(let i = 1; i < arr.length; i++) {
         if(arr[result][1] >= arr[i][0]) {
            const start = Math.min(arr[result][0], arr[i][0]);
            const end = Math.max(arr[result][1], arr[i][1]);
            arr[result] = [start, end];
         } else {
            result++;
            arr[result] = arr[i];
         };
      };

      const answer = []
      for(let i = 0; i <= result; i++) {
        answer[i] = arr[i];
      }
      return answer;
    };
};


// TC: O(1) < loglogn < logn < n^1/3 < n^1 < nlogn < n2 < n3 < 2^n < n^n
  
const nums = [[8,10],[9,18],[0, 1], [1,3],[2,6]];
const solution = new Solution();
console.log('b/4 sorting', nums);
const res = solution.printOverlappingIntervals(nums);
console.log(res);
  

