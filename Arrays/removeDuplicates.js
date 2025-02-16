// Remove duplicates from a sorted array

// Leetcode
// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge


// output:
// nums1 = [10, 20, 30];
// size = 3;

/**
 * @param {number[]} nums
 * @return {number}
 */


class Solution {
  fun(arr) {
    const n = arr.length;
    let k = 1;
    let size = 1;
    for(let i = 1; i < n; i++) {
      if(arr[i] !== arr[i - 1]) {
        arr[k] = arr[i];
        k++;
        size++;
      };
    };  
    return size;  
  };
};

var removeDuplicates = function(nums) {
  const solution = new Solution();
  return solution.fun(nums);
};


// const nums1 = [10, 20, 20, 30, 30, 30, 30];
// const nums1 = [1,1,2];
const nums1 = [0,0,1,1,1,2,2,3,3,4];
// const size = 7;

console.log(nums1);
console.log(removeDuplicates(nums1));
console.log(nums1);