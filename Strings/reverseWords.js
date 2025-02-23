
// Leetcode
// 151. Reverse Words in a String

// AWS
// Azures

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  fun(s) {
    const temp = [];
    for(let i = 0; i < s.length; i++) {
      let res = '';
      let k = i;
      while(s.charAt(k) === ' ' || k >= s.length) {
        res += s.charAt(k);
        k++;
        i++;
      };
      console.log(res);
      temp.push(res);      
    };
    return temp;
  };
};

var reverseWords = function(s) {
  const solution = new Solution();
  return solution.fun(s);
};

// Input: s = "the sky is blue"
// Output: "blue is sky the"

const s = 'the sky is blue';
console.log(reverseWords(s))