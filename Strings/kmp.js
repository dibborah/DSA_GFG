// Do the 4 approaches of string matching
// 1. Naive
// 2. Optimized Naive: For distinct characters
// 3. Rabin karp(using rolling hash)
// 4. KMP(LPS)
// Don this four approaches of string matching


class Solution {
    fillLps(str, lps){
      const n = str.length;
      let len = 0;
      lps[0] = 0;
      let i = 1;
  
      // No redundant match
      // We'll use whatever we have already have matched
      // We are here never matching what we have already have matched
      while(i < n) {
        // If the ith index and previously matched prefix index match when increment both the indices
        if(str[i] === str[len]) { // i always moves forward
          len++;
          lps[i] = len;
          i++;
        } else {
          if (len === 0) {
            lps[i] = 0;
            i++;
          } else {
            len = lps[len - 1];          
          };
        };
      }
    };
    kmp(txt, pat) {
      const n = txt.length;
      const m = pat.length;
      const lps = [];
      let i = 0;
      let j = 0;
      this.fillLps(pat, lps);
      while(i < n) {
        if(txt[i] === pat[j]) {
          i++;
          j++;
        };
        if(j === m) {
          console.log('answer', i - m);
          j = lps[j - 1];
        } 
        if(i < n && txt[i] !== pat[j]) {
          if(j === 0) {
            i++;
          } else {
            j = lps[j - 1];
          };
        };
      };
    };
  };
  
  const solution = new Solution();
  // const str = "abbabb";
////////////// 0 1 2 3 4 5 6 7 8 9 10 11
  // const txt = "a b a b c a b a b a a   d ";

  const txt = "ababcababaad";
  const pat = "ababa";
  solution.kmp(txt, pat);

  // solution.fillLps(str, lps);
  