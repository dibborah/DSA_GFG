// Brute force approach
// TC: O(Power);
// SC: O(Power);
class Solution {
    findPower(n, p) {
        if(p === 0) return 1;
        return n * this.findPower(n, p - 1);
    };
};
const solution = new Solution();
console.log(solution.findPower(3, 3));