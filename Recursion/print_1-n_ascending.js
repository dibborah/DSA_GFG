class Solution {
    printAscending(n) {
        if(!n) {
            return
        };
        this.printAscending(n - 1);
        // This is a non-tail recursion 
        console.log(n);// extra operation after the recursive call returns
    };
};

const solution = new Solution();
solution.printAscending(5);