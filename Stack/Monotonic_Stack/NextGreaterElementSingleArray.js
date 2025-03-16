// Next Greater element(NGE) of a single array
// Both approaches
// Brute force and optimized

const arr1 = [6, 0, 8, 1, 3];

// Finding the NGE of a single array
// The TC: of this appoach is O(N^2)
// SC: Is O(N). Here N is not used for the solution formation but instead to return the answer
// So SC O(N) cannot be optimzed further since we have to return the answer
// So manipulating the given array is not recommend as a good practice
class Solution1 {
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

const solution = new Solution1();

const arr2 = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];

// Optimized solution using MONOTONIC STACK
// TC at worst : O(2N): The inner loop will at worst will go to N in total not N every time the loop executes
// So the TC is N + N not N^2
// SC: is still O(2N)
// Intuition: The light pool idea where a girl standing front will only see the light pools increasing ones, the decreasing ones in the middle will be hidden
class Solution2 {
  findNGE(arr) {
    const n = arr.length;
    const stack = [];
    const nge = new Array(n).fill(0);
    
    for(let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && stack.at(-1) <= arr[i]) {
          stack.pop();
        };
        if(stack.length === 0) {
            nge[i] = -1;
        } else {
            nge[i] = stack.at(-1);
        };
        stack.push(arr[i]);
    };
    return nge;
  };
};

const solution2 = new Solution2();
console.log(solution2.findNGE(arr1));