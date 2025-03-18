// class Solution {
//     bothIncreasingNDecreasing(n, i) {
//         if(i === n + 1) return n;
//         console.log(i);
//         const m = this.bothIncreasingNDecreasing(n, i + 1);
//         console.log(m);
//         return m - 1;
//     };
// };

class Solution {
    bothIncreasingNDecreasing(n, i) {
        if(i === n + 1) return;
        console.log(i);
        this.bothIncreasingNDecreasing(n, i + 1);
        console.log(i);
    };
};

const solution = new Solution();
solution.bothIncreasingNDecreasing(6, 1);