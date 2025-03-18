class Solution {
    bothDecreasingNIncreasing(n) {
        if(!n) return;
        console.log(n);
        this.bothDecreasingNIncreasing(n - 1);
        console.log(n);
    };
};

const solution = new Solution();
solution.bothDecreasingNIncreasing(6);