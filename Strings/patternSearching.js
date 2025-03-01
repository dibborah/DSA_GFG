// pattern searching is a very common problem in computer science
// Google search
// MS file search
// DNA search

// 1.Naive
// 2.Rabin karp
// 3.KMP Algo
// 4.Suffix Tree DS

class Solution {
  //   Naive Solution for string searching
  // TC: O((n - m + 1) * m)
  // SC: O(1)
  //   fun(text, pat) {
  //     const m = pat.length; // 4
  //     const n = text.length; // 7
  
  //     // outerLoop:
  //     for (let i = 0; i <= (n - m); i++) {// This loop runs: n - m + 1 times since its <= (Note we are also running for =)
  //       for (let j = 0; j < m; j++) {
  //         if (pat.charAt(j) !== text.charAt(i + j)){
  //         //   break outerLoop;
  //           break;
  //         };
  //         if (j === m - 1) {
  //           console.log(i + ' ');
  //         };
  //       };
  //     };
  //   };

// Optimization to the naive solution if the characters in the pattern are distinct
// Improved naive algorithm for distinct

  fun(text, pat) {
    const m = pat.length;
    const n = text.length;

    for (let i = 0; i <= (n - m); ) {
      let j;

      for (j = 0; j < m; j++) {
        if (pat.charAt(j) !== text.charAt(i + j)) {
          break;
        };
      };

      if (j === m) {
        console.log(i + ' ');
      };
      if (j === 0) {
        i++;
      } else {
        i = i + j;
      };
    };

  };
};

const findPatternIndexes = function(text, pat) {
  const solution = new Solution();
  return solution.fun(text, pat);
};

const text = 'ABCABCD'; // 7
const pat = 'ABCD'; // 4

// const text = 'ABABABCD'; // 7 // 0, 2
// const pat = 'ABAB'; // 4

// txt: 'ABABABCD';
// pat: 'ABAB';
// output: 0 2;

// const text = 'ABCABCDABCD';
// const text = 'ABCD';
// const pat =  'ABCD';

findPatternIndexes(text, pat);

