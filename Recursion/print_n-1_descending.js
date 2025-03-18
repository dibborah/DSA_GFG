class Solution {
    printDescending(n) {
        if(!n) {
            return
        };
        console.log(n);
        this.printDescending(n - 1);
    };
};

const solution = new Solution();
solution.printDescending(5);