// Leetcode Question: 
// Question Name: Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Note: Might write a more optimized code in the future (Like optimized Naive , Rabin Karp and KMP): I think this question can be written using all those algorithms.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

class Solution {
  fun(text, pat) {
    const m = pat.length;
    const n = text.length;

    for (let i = 0; i <= (n - m); i++) {
      for (let j = 0; j < m; j++) {
        if (pat.charAt(j) !== text.charAt(i + j)){
          break;
        };
        if (j === m - 1) {
          return i;
        };
      };
    };
    return -1;
  };
};

const strStr = function(haystack, needle) {
  const solution = new Solution();
  return solution.fun(haystack, needle);
};