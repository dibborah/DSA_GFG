// The brute force approach of the findSubsets and this Subset Sum is remaining



// Approach 2: Optimized approach
class Solution1 {
    // Using pick and non-pick approach at every function call
    fun(arr, result, n, temp, i) {
        if (i === n) {
            result.push([...temp]);
            return;
        };

        temp.push(arr[i]);
        this.fun(arr, result, n, temp, i + 1);
        temp.pop();
        this.fun(arr, result, n, temp, i + 1);
    };

    subsets(arr) {
        const result = [];
        this.fun(arr, result, arr.length, [], 0);
        return result;
    };
};



// In the below  I was trying to find the subsets of an array in sorted order
// ... to be continued
class Solution2 {
    // Using pick and non-pick approach at every function call
    fun(arr, result, n, temp) {
        if (n === 0) {
            result.push([...temp]);
            return;
        };

        temp.push(arr[n - 1]);
        this.fun(arr, result, n - 1, temp);
        temp.pop();
        this.fun(arr, result, n - 1, temp);
    };

    subsets(arr) {
        const result = [];
        this.fun(arr, result, arr.length, []);
        return result;
    };
};

const solution = new Solution2();
// const arr = [1, 2, 3];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = [1, 2];
console.log(solution.subsets(arr));