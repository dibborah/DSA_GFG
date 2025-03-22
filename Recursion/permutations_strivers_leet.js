// Strivers
// Leetcode
// Leetcode problem no. and name
// 46. Permutations

// Problem statement
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// TC: O(N!) {No. of permutations} * O(N){inner loop that we are running}
// Total TC: O(N * N!)
// The algo will take N time whenever an answer gets entered in the Data Structure
// SC: O(1) {Not considering the result array O(N!)}
// Aux Deepth SC: O(N)

// This is the Approach II
// This approach saves a lot of extra space than approach I
// No extra space apart from the Aux recursion deepth O(N) and result array O(N!)

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
