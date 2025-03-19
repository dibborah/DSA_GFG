// Strivers
// Leetcode
// Leetcode problem no. and name
// 46. Permutations

// Problem statement
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

class Solution {

  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  fun(arr, k, n, result) {
    if (k === n) {
        result.push([...arr]);
        return;
    };

    for (let i = k; i < n; i++) {
        this.swap(arr, k, i);
        this.fun(arr, k + 1, n, result);
        this.swap(arr, k, i);
    };
  };
  permutations (arr) {
    const result = [];
    this.fun(arr, 0, arr.length, result);
    return result;
  };
};

const solution = new Solution();
const nums = [1,2,3];
console.log(solution.permutations(nums));
