// Longest proper prefix suffix : LPS

// Problem statement: 
// Write a program that takes a string as an arguement and return
// a LPS arrays

// Aditya verma

// recursive 
// memoize
// Tabulation

// class Solution {
// // My Naive approach
// // TC: n^3
// // SC: n^3
//   fun(str){
//     const result = [];
//     for (let i = 0; i < str.length; i++) {
//       let p = '';
//       let s = '';

//       let p_ = [];
//       let s_ = []

//       let j = 0, k = i;

//       while(j <= i && k >=0) {
//         p = str.slice(0, j);
//         p_.push(p);
//         s = str.slice(k, i + 1);
//         s_.push(s);
//         j++;
//         k--;
//       };

//       let temp = 0;

//       for (let i = 0; i < s_.length; i++) {
//         let len = p_.includes(s_[i]) ? s_[i]?.length : 0;
//         temp = Math.max(temp, len);
//       };

//       result.push(temp);
//     };
//     return result;
//   };

// // Other naive solution 
//   longProperPreSuff(str, n) {
//     for (let len = n - 1; len > 0; len--) {
//       let flag = true;
//       for(let i = 0; i < len; i++) {
//         if(str[i] !== str[n - len + i]) {
//             flag = false;
//         };
//         if(flag) {
//           return len;
//         };
//       };
//     };
//     return 0;
//   };
//   fun(str, lps) {
//     for (let i = 0; i < str.length; i++) {
//       lps[i] = this.longProperPreSuff(str, i + 1);
//     };
//   };
// };

// class Solution_ {
    
//     // Other naive solution 
//       longProperPreSuff(str, n) {
//         for (let len = n - 1; len > 0; len--) {
//           let flag = true;
//           for(let i = 0; i < len; i++) {
//             if(str[i] !== str[n - len + i]) {
//                 flag = false;
//             };
//             if(flag) {
//               return len;
//             };
//           };
//         };
//         return 0;
//       };
//       fun(str, lps) {
//         for (let i = 0; i < str.length; i++) {
//           lps[i] = this.longProperPreSuff(str, i + 1);
//         };
//       };
// };


// let fn = function(str) {
//   const lps = [];
//   const solution = new Solution_();
//   solution.fun(str, lps);
//   // return solution.fun(str);
//   return lps;
// };

// const str = "abab";

// const str = "ababc";
// const str = "abacabad";
// const str = "abbabb";

// console.log(fn(str));








// GFG solution

// Jab string equal nahi ha
// to false ho k break hua hain

// class Solution2 {
//   longProperPreSuff(str, n) {
//     for (let len = n - 1; len > 0; len--) {
//       let flag = true;
//       for (let i = 0; i < len; i++) {
//         const k = n - len + i;
//         if (str[i] !== str[k]) {
//           flag = false;
//           break;
//         };
//       };
//       if (flag) {
//         return len;
//       };
//     };
//     return 0;
//   };

//   fun(str, lps) {
//       const n = str.length;
//       for (let i = 0; i < n; i++) {
//           lps[i] = this.longProperPreSuff(str, i + 1);
//       };
//   };
// };

// const str = "abab";
// const str = "abacabad";

// const str = "a b a b a c a b";

// const lps = [];
// const solution_ = new Solution2();
// solution_.fun(str, lps);
// console.log('lps', lps);


//optimized lps solution

class Solution3 {
  fillLps(str, lps) {
    const n = str.length;
    let len = 0;
    lps[0] = 0;
    let i = 1;
    while(i < n) {
      if(str[i] === str[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if(len === 0) {
          lps[i] = 0;
          i++
        } else {
          len = lps[len - 1];
        };
      };
    };;;
  };
};

const solution3 = new Solution3();
// const str = 'abacabad';
const str = 'abbabb';
const lps = [];


solution3.fillLps(str, lps);
console.log('lps', lps);


