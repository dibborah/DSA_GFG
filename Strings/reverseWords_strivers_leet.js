
// Leetcode
// 151. Reverse Words in a String

// AWS
// Azures

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */

class Solution {

  // Approach 1: Naive solution using Stack:
  fun(s) {
    const stack = [];

    const words = s.trim().split(/\s+/);
    for(const word of words) {
      stack.push(word);
    };

    console.log(stack)

    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
      if (stack.length > 0) {
        reversedString += ' ';
      };
    };

    return reversedString;

  };
};

let reverseWords = function(s) {
  const solution = new Solution();
  return solution.fun(s);
};

// Input: s = "the sky is blue"
// Output: "blue is sky the"

const s = 'the sky is blue';
// const s =  '   hello    world    ';
console.log(reverseWords(s))