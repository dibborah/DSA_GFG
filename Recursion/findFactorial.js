class Solution {
    findFactorial(n) {
        if(n < 0) return 'Invalid input';
        if(n === 0 || n === 1) return 1;
        return n * this.findFactorial(n - 1);
    };
};

const solution = new Solution();
console.log(solution.findFactorial(-1));

// TC: O(N)
// SC:O(N)