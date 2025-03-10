// Leetcode Question no. and name 
// 242. Valid Anagram(Strivers)
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

class Solution {
  // MY naive solution without sorting
  // fun(s, t) {
  //   const s_ = s.split('');
  //   const t_ = t.split('');
  //   const n = s_.length;
  //   const m = t_.length;

  //   const outerLoop = n > m ? m : n;

  //   for(let i = 0; i < outerLoop; i++) {
  //     for(let j = 0; j < m; j++) { 
  //       if(s_[i] === t_[j]) {
  //         t_[j] = -1;
  //         s_[i] = -1
  //         break;
  //       };
  //     };
  //   };

  //   for(let i of s_) {
  //     if(i !== -1) {
  //       return false;
  //     };
  //   };
  //   for(let i of t_) {
  //     if(i !== -1) {
  //       return false;
  //     };
  //   };
  //   return true;
  // };
  
  // via sorting 
  fun(s, t) {
    const n = s.length;
    const m = t.length;
    
    if(n !== m)
      return false;
        
    const s_ = s.split('').sort();// nlogn
    const t_ = t.split('').sort();

    let i = 0;
    let j = 0;

    while(i < n) {
      if(s_[i] !== t_[j]) {
        return false;
      };
      i++;
      j++;
    };
    return true;
  };
};

let isAnagram = function(s, t) {
  const solution = new Solution();
  return solution.fun(s, t);
};


const s = "anagram", t = "nagaram";
// const s = "rat", t = "car";
// const s = "ab", t = "a";

console.log(isAnagram(s, t));