// class Solution {
//   // without inbuild function
//   // O ((m+n) - 1);// worst case
//   mergeTwoArrays(a, b) {
//     const m = a.length;
//     const n = b.length;
//     let i = 0;
//     let j = 0;
//     while(i < m && j < n) {
//       if(a[i] <= b[j]) {
//         console.log(a[i]);
//         i++;
//       } else {
//         console.log(b[j]);
//         j++;
//       };
//     };
//     while(i < m) {
//       console.log(a[i]);
//       i++;
//     };
//     while(j < n) {
//       console.log(b[j]);
//       j++;
//     };
//   };

// // using inbuild methods
// // fun(a, b) {
// //     // const c = [...a, ...b];
// //     const c = [];
// //     const n = a.length;
// //     const m = b.length;
// //     for(let i = 0; i < n; i++) {
// //         // c.push(a[i]);
// //         c[i] = a[i];
// //     };
// //     for(let i = 0; i < m; i++) {
// //         // c.push(b[i]);
// //         c[n + i] = b[i];
// //     };
// //     console.log(c);
// //     return c.sort((a, b) => a - b);// This the operation taking maximum time
// //     // which is TC: O((m + n) + log(m + n))
// // };

// };

// const a = [10, 15, 20];
// const b = [5, 6, 6, 15];

// // output: 5, 6, 6, 10, 15, 15, 20

// const solution = new Solution();
// solution.mergeTwoArrays(a, b);

// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

class Solution {
  fun(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while(i >= 0 && j >= 0) {
      if(arr1[i] > arr2[j]) {
        arr1[k] = arr1[i];
        i--;
      }else {
        arr1[k] = arr2[j];
        j--;
      }
      k--
    }; 
    while(i >= 0) {
        arr1[k] = arr1[i];
        i--;
        k--;
    }
    while(j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
  };
};

var merge = function(nums1, m, nums2, n) {
  const solution = new Solution();
  solution.fun(nums1, m, nums2, n);
};

const nums1 = [1,2,3,0,0,0]; const m = 3;
const nums2 = [2,5,6]; const n = 3;

console.log(nums1);
console.log(nums2);
merge(nums1, m, nums2, n);
console.log(nums1);