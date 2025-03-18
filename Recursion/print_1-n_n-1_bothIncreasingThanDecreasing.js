class Solution {
    bothIncreasingNDecreasing(n, i) {
        if(i === n + 1) return n;
        console.log(i);
        const m = this.bothIncreasingNDecreasing(n, i + 1);
        console.log(m);
        return m - 1;
    };
};

const solution = new Solution();
solution.bothIncreasingNDecreasing(6, 1);