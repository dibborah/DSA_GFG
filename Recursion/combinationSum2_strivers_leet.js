// Strivers
// Leetcode

// Leetcode problem no. and statement
// 40. Combination Sum II

// Problem statement: 
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]


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

        for(let j = i; j < n; j++) {
            if(arr[j] <= target) {
                if(j !== i && arr[j] === arr[j - 1]) continue;
                temp.push(arr[j]);
                this.fun(arr, target, result, n, currentSum + arr[j], temp, j + 1);
                temp.pop();
            };
            this.fun(arr, target, result, n, currentSum, temp, j + 1);
        };

    };

    combinationSum2 (arr, target) {
        const result = [];
        arr.sort((a, b) => a - b);
        this.fun(arr, target, result, arr.length, 0, [], 0);
        return result;
    };
};


const candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
// const candidates = [2,5,2,1,2], target = 5;
const solution = new Solution();
console.log(solution.combinationSum2(candidates, target));
