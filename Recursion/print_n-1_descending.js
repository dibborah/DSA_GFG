class Solution {
    printDescending(n) {
        if(!n) {
            return
        };
        console.log(n);
        this.printDescending(n - 1);// recursive call last operation of the function
        // This is a tail - recursion
        // No extra statements after the recursive call returns
    };
};

const solution = new Solution();
solution.printDescending(5);