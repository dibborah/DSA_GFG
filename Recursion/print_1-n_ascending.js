class Solution {
    printAscending(n) {
        if(!n) {
            return
        };
        this.printAscending(n - 1);
        console.log(n);
    };
};

const solution = new Solution();
solution.printAscending(5);