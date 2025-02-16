class Solution {
  // without inbuild function
  // O ((m+n) - 1);// worst case
  mergeTwoArrays(a, b) {
    const m = a.length;
    const n = b.length;
    let i = 0;
    let j = 0;
    while(i < m && j < n) {
      if(a[i] <= b[j]) {
        console.log(a[i]);
        i++;
      } else {
        console.log(b[j]);
        j++;
      };
    };
    while(i < m) {
      console.log(a[i]);
      i++;
    };
    while(j < n) {
      console.log(b[j]);
      j++;
    };
  };

// using inbuild methods
// fun(a, b) {
//     // const c = [...a, ...b];
//     const c = [];
//     const n = a.length;
//     const m = b.length;
//     for(let i = 0; i < n; i++) {
//         // c.push(a[i]);
//         c[i] = a[i];
//     };
//     for(let i = 0; i < m; i++) {
//         // c.push(b[i]);
//         c[n + i] = b[i];
//     };
//     console.log(c);
//     return c.sort((a, b) => a - b);// This the operation taking maximum time
//     // which is TC: O((m + n) + log(m + n))
// };

};

const a = [10, 15, 20];
const b = [5, 6, 6, 15];

// output: 5, 6, 6, 10, 15, 15, 20

const solution = new Solution();
solution.mergeTwoArrays(a, b);
