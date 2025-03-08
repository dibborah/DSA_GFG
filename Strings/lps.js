// Longest proper prefix suffix : LPS

// Problem statement: 
// Write a program that takes a string as an arguement and return
// a LPS arrays

class Solution {
  fun(str, n){
    const result = [];
    for (let i = 0; i < str.length; i++) {
      let p = '';
      let s = '';

      let p_ = [];
      let s_ = []

      let j = 0, k = i;

      while(j <= i && k >=0) {
        p = str.slice(0, j);
        p_.push(p);
        s = str.slice(k, i + 1);
        s_.push(s);
        j++;
        k--;
      };

      let temp = 0;

      for (let i = 0; i < s_.length; i++) {
        let len = p_.includes(s_[i]) ? s_[i]?.length : 0;
        temp = Math.max(temp, len);
      };

      result.push(temp);
    };
    return result;
  };
};

let lps = function(str) {
  const solution = new Solution();
  return solution.fun(str, str.length);
};

// const str = "ababc";
// const str = "abacabad";
const str = "abbabb";
console.log(lps(str))