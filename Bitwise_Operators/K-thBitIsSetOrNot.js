// K-th Bit is Set or Not

// Given a number n and a bit number k, check if the kth index bit of n is set or not. A bit is called set if it is 1. The position of set bit '1' should be indexed starting with 0 from the LSB side in the binary representation of the number.
// Note: Index is starting from 0. You just need to return true or false.

// Example: 
// Input: n = 4, k = 0
// Output: false
// Explanation: Binary representation of 4 is 100, in which 0th index bit from LSB is not set. So, return false.

/**
 * @param {Number} n
 * @param {Number} k
 * @returns {boolean}
 */

class Solution {
    // Function to check if Kth bit is set or not.
    checkKthBit(n, k) {
        n = (n >> k)
        return ((n & 1) !== 0);
    };
};
