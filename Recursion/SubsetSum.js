// GFG
// Subset Sum Problem

// Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] with sum equal to given sum. 

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */

// brute force approach 
// This is the right approach but this will be Time limit exceeded in platforms
class Solution {
    fun (arr, target, currentSum, n) {
        // base case
        if(currentSum === target) {
            return true;
        }
        if (n === 0 && (currentSum !== target)) {
            return false;
        };


        if (arr[n - 1] <= target) {
            return this.fun(arr, target, currentSum + arr[n - 1], n - 1)
              || this.fun(arr, target, currentSum, n - 1);
        };

        return this.fun(arr, target, currentSum, n - 1);        
    };

    isSubsetSum(arr, sum) {
        return this.fun(arr, sum, 0, arr.length);
    };
};

const solution = new Solution();

// const arr = [3, 34, 4, 12, 5, 2], sum = 9;
// const arr = [3, 34, 4, 12, 5, 2], sum = 30;
const arr = [1, 2, 3], sum = 6;
console.log(solution.isSubsetSum(arr, sum));