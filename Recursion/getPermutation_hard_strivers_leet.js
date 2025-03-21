// strivers:(Hard)
// leetcode: (Hard)

// leetcode question no. and name
// 60. Permutation Sequence 

// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:

// Input: n = 3, k = 3
// Output: "213"

class Solution {
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    fun(arr, n, result, temp, index) {
        if (index === n) {
            result.push(arr.join(''));
            return;
        };

        for(let i = index; i < n; i++) {
            this.swap(arr, index, i);
            this.fun(arr, n, result, temp, index + 1)
            this.swap(arr, index, i);
        };
    };

    permutation (n, k) {
        const result = [];
        const arr = [];
        for(let i = 1; i <= n; i++) {
            arr.push(i);
        };

        this.fun(arr, arr.length, result, [], 0);
        result.sort((a, b) => a - b);
        return result[k - 1];
    };
}

const solution = new Solution();

// const n = 3, k = 3;
// const n = 4, k = 9;
// const n = 3, k = 1;
const n = 3, k = 5;
console.log(solution.permutation(n, k));