// Leetcode Question number and Name 
// 14. Longest Common Prefix(Striver Question)
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Not yet completed 

/**
 * @param {string[]} strs
 * @return {string}
 */

class Solution {
  fun(arr) {
    for(let i = 0; i < arr[0].length; i++) {
      let temp = '';
      for(let j = 0; j < arr.length; j++) {
        arr[j][i] === arr[j + 1][i]
      };
    };
  };
};

let longestCommonPrefix = function(strs) {
  const solution = new Solution(strs);
  return solution.fun(strs);
};

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));