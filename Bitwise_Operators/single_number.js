// Single Number
// Given an array arr[] of positive integers where every element appears even times except for one. Find that number occurring an odd number of times.

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    getSingle(arr) {
        let result = 0;
        for(const num of arr)
          result ^= num;
        return result;
    };
};

// Examples: 

// Input: arr[] = [1, 1, 2, 2, 2]
// Output: 2
// Explanation: In the given array all element appear two times except 2 which appears thrice.