// Missing in Array

// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        const n = arr.length + 1;
        const expectedSum = ((n * (n + 1)) / 2);

        let actualSum = 0;
        for(let i = 0; i < n - 1; i++) {
            actualSum += arr[i];
        };
        return expectedSum - actualSum;
    };
};
