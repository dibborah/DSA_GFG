// Power of 2
// Given a non-negative integer n. The task is to check if it is a power of 2. 


/**
 * @param {Number} n
 * @returns {boolean}
 */

class Solution {
    isPowerofTwo(n) {
        if(n === 1)
          return true;
        if ((n & 1) !== 0)
          return false;
        return this.isPowerofTwo(Math.floor(n / 2));
    };
};