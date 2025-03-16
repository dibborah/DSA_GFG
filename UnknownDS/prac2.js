// Next Greater element(NGE) of a single array

const arr = [6, 0, 8, 1, 3];

// Finding the NGE of a single array
// The TC: of this appoach is O(N^2)
// SC: Is O(N). Here N is not used for the solution formation but instead to return the answer
// So SC O(N) cannot be optimzed further since we have to return the answer
// So manipulating the given array is not recommend as a good practice
class Solution {
  fun(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    console.log(result);
    for(let i = 0; i < n - 1; i++) {
        for(let j = i; j < n; j++) {
            if(nums[j] > nums[i]) {
                result[i] = nums[j];
            };
        };
    };
    return result;
  };
};

const solution = new Solution();
console.log(solution.fun(arr));