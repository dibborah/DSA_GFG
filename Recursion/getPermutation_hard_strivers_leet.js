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

// Brute force approach of getPermutation

// Idea: Find all the permutation of the given array and then return the k-1th permutation since we use zero based indexing

// TC: Find the permutation O(N!) and using Join method O(N) => O(N * N!)
// Next: We are sorting N! no.'s so N!logN! : Now using stirling approximation
// LogN! === NLogN so => O(N! * NLogN)
// So overall Time complexity is  O(N! * NlogN)

// SC: N!(result array) * N(size of each array push in the result array)
// O(N * N!)

// Auxilary Space: O(N)


// Recursion code
class Solution1 {
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

const solution1 = new Solution1();

// const n = 3, k = 3;
// const n = 4, k = 9;
// const n = 3, k = 1;
// const n = 3, k = 5;
// console.log(solution1.permutation(n, k));

// Optimized approach
// TC: O(N^2)


class Solution2 {
    getPermutation(n, k) {
        let fact = 1;
        let numbers = [];
        for(let i = 1; i < n; i++) {
            fact = fact * i;
            numbers.push(i);
        };
        numbers.push(n);

        let ans = '';
        k = k - 1;
        while(true) {
            ans = ans + (numbers[Math.floor(k / fact)] + '');
            numbers.splice(k / fact, 1);
            if (!numbers.length) {
                break;
            };

            k = k % fact;
            fact = fact / numbers.length;
        }
        return ans;
    };
};

// const n = 3, k = 3;
// const n = 4, k = 9;
const n = 3, k = 1;
// const n = 3, k = 5;
const solution2 = new Solution2();
console.log(solution2.getPermutation(n, k));