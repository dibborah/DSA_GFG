class Solution {
    fun(arr) {
        const result = [];
        let start = 0;
        for(let i = 1; i <= arr.length; i++) {
            if(arr[i] !== arr[i - 1] + 1) {
                if(i - start === 1) {
                    result.push(start)
                } else if(i - start === 2) {
                    result.push(arr[start]);
                    result.push(arr[i - 1]);
                } else {
                    result.push(`${arr[start]}-${arr[i - 1]}`);
                }
                start = i;
            };
        };
        return result;
    };
};

let arr = [1, 2, 3, 5, 6, 8, 9, 10];
const solution = new Solution();
console.log(solution.fun(arr));