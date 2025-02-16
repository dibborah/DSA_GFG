class Solution {
//   mergeTwoArrays(a, b) {
//     const n1 = a.length;
//     const n2 = b.length;
//     const n = (n1 < n2) ? n1 : n2;
//     const c = [];
//     let index1 = 0;
//     let index2 = 0;// 3
//     for(let i = 0; i < n; i++) {
//       if(a[index1] < b[index2]) {
//         c.push(a[index1]);
//         index1++
//       } else {
//         c.push(b[index2]);
//         index2++;
//       };
//     };    
//   };
// using inbuild methods
fun(a, b) {
    // const c = [...a, ...b];
    const c = [];
    const n = a.length;
    const m = b.length;
    for(let i = 0; i < n; i++) {
        // c.push(a[i]);
        c[i] = a[i];
    };
    for(let i = 0; i < m; i++) {
        // c.push(b[i]);
        c[n + i] = b[i];
    };
    console.log(c);
    return c.sort((a, b) => a - b);// This the operation taking maximum time
    // which is TC: O((m + n) + log(m + n))
};
};

const a = [10, 15, 20];
const b = [5, 6, 6, 15];

// output: 5, 6, 6, 10, 15, 15, 20

const solution = new Solution();
console.log(solution.fun(a, b));
