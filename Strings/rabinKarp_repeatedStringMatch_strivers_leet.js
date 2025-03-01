// Strivers + GFG(Plat similar) + Leetcode 
// Question Name: Repeated String Match

// Problem statement: 
// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

class Solution {
  fun(a, b) {
    console.log(a);
    console.log(b);
  };
};

var repeatedStringMatch = function(a, b) {
  const solution = new Solution();
  return solution.fun(a, b);
};


// Input: a = "abcd", b = "cdabcdab"
// Output: 3

const a = "abcd";
const b = "cdabcdab";

repeatedStringMatch(a, b);


