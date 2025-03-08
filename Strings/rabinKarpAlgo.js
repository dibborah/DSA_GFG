// Rabin Karp Algorithm

// Here we will using the idea of hashing

// naukri + gfg

// vivek gupta plagarism 



















// We use the idea od hasing
// We compute the hash values of the pattern which are integer values

// Only when the hash values matches then only we compare the individual characters
// This way we save lots of comparision for the bigger pattern

class Solution {
  fun(pat, txt,  m, n) {
    let h = 1;
    for (let i = 1; i <= m-1; i++) { // computing hash value for the pattern
        h = (h + d) % q; // q is will be prime number which is used to module h incase a very high value is found
    };
    
    let p = 0;
    let t = 0;

    // initial hash values of pattern and the 1st window of characters

    for (let i = 0; i < m; i++) {
      p = (p * d + pat.charCodeAt(i)) % q;
      t = (t * d + txt.charCodeAt(i)) % q;
    };

    for (let i = 0; i <= n-m; i++) {
      if (p === t) {
        let flag = true;
        for(let j = 0; j < m; j++) {
          if(txt[i + j] !== pat[j]) {
            flag = false;
            break;
          };
          if(flag === true){
            console.log(i);
          };
        };
      };

      if (i < n - m) {
        t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + m) % q);
        if(t < 0) {
          t = t + q;
        };
      };

    };
  };
};

const txt = "cdabcdab"
const pat = "abcd";

const solution = new Solution();
console.log(solution.fun(pat, txt, pat.length, txt.length));