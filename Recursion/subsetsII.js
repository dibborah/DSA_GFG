// Strivers
// Leetcode

// Leetcode Problem number and name
// 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// -------------------------------

// TC: O(2^N (No. of subsets we are generating) + n(Deep copy of temp array and adding time to the result))
// SC: 2^N * k(avg. length of generated subsets)
// Auxilliary space: O(N): Length of the most called recursion call stack

class Solution {
    fun(arr, result, n, temp, k) {
        result.push([...temp]);
        for (let i = k; i < n; i++) {
            if(i !== k && arr[i - 1] === arr[i]) continue;
            temp.push(arr[i]);
            this.fun(arr, result, n, temp, i + 1);
            temp.pop();
        };
    };

    subsetswithDup(arr) {
        const result = [];
        arr.sort((a, b) => a - b);
        this.fun(arr, result, arr.length, [], 0);
        return result;
    };
};

const nums = [1,2,2];
// const  [[],[1],[1,2],[1,2,2],[2],[2,2]];

const solution = new Solution();
console.log(solution.subsetswithDup(nums));