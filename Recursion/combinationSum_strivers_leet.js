// strivers
// leetcode

// leetcode problem no. and name
// 39. Combination Sum 

// Problem statement: 
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Input: candidates = [2,3,6,7], target = 7
// Output: [ [2,2,3],[7] ]

// Intuition
// Whenever we have an array and we have to go for some kind of combination always go for 
// the pick and non-pick approach


// This is a optimized approach to this problem
// Using pick and non-pick approach

// TC: O(2^T * k)(Exponential)
// Need to understand this below statement  
// SC: O(k * x(combination)) {We are not sure how many combination will be there that is completly uncertain}
// Aux SC: O(N)

class Solution {
    fun(arr, target, result, n, currentSum, temp, i) {
        if(currentSum === target) {
            result.push([...temp]);
            return;
        };
        if(currentSum > target) {
            return;
        };
        if (i === n) {
            return;
        };

        if(arr[i] <= target) {
            temp.push(arr[i]);
            this.fun(arr, target, result, n, currentSum + arr[i], temp, i);
            temp.pop();
        };
        this.fun(arr, target, result, n, currentSum, temp, i + 1);
    };

    combinationSum (arr, target) {
        const result = [];
        this.fun(arr, target, result, arr.length, 0, [], 0);
        return result;
    };
};

// const candidates = [2,3,6,7], target = 7;
// const  candidates = [2,3,5], target = 8

const  candidates = [2,3,8,4], target = 6;
const solution = new Solution();
console.log(solution.combinationSum(candidates, target));

// Combination or subsequence: Recursion 

