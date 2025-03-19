// Brute force idea:
// Power set  : 2^N * N

// For every Question I need to go for two approaches
// At minimum

// First the brute force approach
// 2nd the optimized approach

// The brute force approach of the findSubsets and this Subset Sum is remaining

// optmized idea: 2^N to get the sum of all the subsets
// TC: O(2^N) + O(2^N *Log(2^N))
// SC: O(2^N)

class Solution {
    fun(arr, result, n, targetSum) {
        if (n === 0) {
            result.push(targetSum);
            return;
        };

        this.fun(arr, result, n - 1, targetSum + arr[n - 1]);
        this.fun(arr, result, n - 1, targetSum);
    };

    subsetsSum(arr) {
        const result = [];
        this.fun(arr, result, arr.length, 0);
        return result.sort((a, b) => a - b);
    };
};

const solution = new Solution();
// const arr = [1, 2, 3];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = [1, 2];

// const arr = [2, 3];
// const arr = [1, 2, 1];
const arr = [5, 6, 7];
console.log(solution.subsetsSum(arr))