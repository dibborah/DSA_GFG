              // 0  1  2  3  4  5

// [1-3, 5,6,8,9, 10-13]

// class Solution {
//     fun(arr, n) {
//         const result = [];
//         for(let i = 0; i < n; i++) {
//             if(arr[i] + 1 === arr[i + 1]) {
//                 if(arr[i + 1] + 1 === arr[i + 2]) {
//                     let j = i;
//                     while(j === j - 1) {
//                         j++;
//                     };
//                     result.push(`${arr[i]}-${arr[j]}`);
//                 };
//             } else {
//                result.push(arr[i]);
//              };
//         };
//         console.log(result);
//     };
// };

// const solution = new Solution();
// solution.fun(arr, arr.length);


function formatRanges(arr) {
    let result = [];
    let start = arr[0];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            if (i - arr.indexOf(start) === 1) {
                result.push(start);
            } else if (i - arr.indexOf(start) === 2) {
                result.push(start);
                result.push(arr[i - 1]);
            } else {
                result.push(`${start}-${arr[i - 1]}`);
            }
            start = arr[i];
        }
    }
    return result;
}

let arr = [1, 2, 3, 5, 6, 8, 9, 10];
console.log(formatRanges(arr));
