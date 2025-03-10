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
  // fun(s, t) {
  //   const n = s.length;
  //   const m = t.length;
    
  //   if(n !== m)
  //     return false;
        
  //   const s_ = s.split('').sort();// nlogn
  //   const t_ = t.split('').sort();

  //   let i = 0;
  //   let j = 0;

  //   while(i < n) {
  //     if(s_[i] !== t_[j]) {
  //       return false;
  //     };
  //     i++;
  //     j++;
  //   };
  //   return true;
  // };

  // Most efficient solution
  // This approach works in linear time 
  // Solution in only one traversal : TC: O(n)
  // fun(s, t) {
  //   const CHAR = 256;

  //   const n = s.length;
  //   const m = t.length;

  //   if(s.length !== t.length)
  //     return false;

  //   const count = [];

  //   for(let i = 0; i < m; i++) {
  //     count[s.charAt(i)] = 0;
  //     count[t.charAt(i)] = 0;
  //   };

  //   for(let i = 0; i < m; i++) {
  //     count[s.charAt(i)]++;
  //     count[t.charAt(i)]--;
  //   };


  //   for(let i = 0; i < m; i++) {
  //     if(count[s.charAt(i)] !== 0) {
  //       return false;
  //     };
  //   };

  //   return true;

  // };

  // via AI
  // using charCodeAt 
  // now we are using ASCII by charCodeAt
  // TC: O(n + CHAR)
  // SC: O(CHAR)
  // This approach works in linear time 
  fun(s, t) {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) return false;

    const CHAR = 256;
  
    // Create an array for counting character frequencies
    const count = Array(CHAR).fill(0); // Optimized initialization

  
    // Iterate through both strings once
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i)]++; // Increment count for s
      count[t.charCodeAt(i)]--; // Decrement count for t
    };

    // If all counts are zero, the strings are anagrams
    return count.every(c => c === 0); // Check if all counts are zero
  }
  
};

let isAnagram = function(s, t) {
  const solution = new Solution();
  return solution.fun(s, t);
};


const s = "anagram", t = "nagaram";
// const s = "rat", t = "car";
// const s = "ab", t = "a";

console.log(isAnagram(s, t));