// Strivers(Medium)
// Leetcode(Hard)
// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */

// The naive or brute force approach
// TC: O(N^2)
class Solution1 {
    fun(arr) {
        const n = arr.length;
        let result = 0;
        
        for(let i = 0; i < n; i++) {
            let elementsCount = 1;
            for (let j = i - 1; j >= 0; j--) {
                if(arr[j] >= arr[i]) {
                    console.log(arr[i], arr[j])
                    elementsCount++;
                } else {
                    break;
                };
            };
            for (let j = i + 1; j < n; j++) {
                if(arr[j] >= arr[i]) {
                    console.log(arr[i], arr[j])
                    elementsCount++
                } else {
                    break;
                };
            };
            console.log(elementsCount);
            result = Math.max(result, (arr[i] * elementsCount));
        };
        return result;
    };
};

let largestRectangleArea1 = function(heights) {
  const solution = new Solution1();
  return solution.fun(heights);
};


const heights1 = [2,1,5,6,2,3];
// const heights1 = [2,4];
// console.log(largestRectangleArea1(heights1));


class Solution2 {
    findNSEIndices(arr) {
        const n = arr.length;
        const stack = [];
        const result = [];
        for(let i = n - 1; i >= 0; i--) {
            while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
                stack.pop();
            };
            if(stack.length === 0) {
                result[i] = n;
            } else {
                result[i] = stack.at(-1)
            };
            stack.push(i);
        };
        return result;
    }
    findPSEIndices(arr) {
        const n = arr.length;
        const stack = [];
        const result = [];
        for(let i = 0; i < n; i++) {
            while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
                stack.pop();
            };
            if(stack.length === 0) {
                result[i] = -1;
            } else {
                result[i] = stack.at(-1);
            };
            stack.push(i);
        };
        return result;
    }
    fun(arr) {
      const nse = this.findNSEIndices(arr);
      const pse = this.findPSEIndices(arr);

      let result = 0;

      for (let i = 0; i < arr.length; i++) {
        result = Math.max(result, arr[i] * ((nse[i] - pse[i]) - 1));
      };
      return result;
    };
};


let largestRectangleArea2 = function(heights) {
    const solution = new Solution2();
    return solution.fun(heights);
};

// Test cases 
// const heights2 = [2,1,5,6,2,3];
// const heights2 = [2,4];

// console.log(largestRectangleArea2(heights2));


// This is the most efficient solution to this problem
// TC: O(N) => outer loop & O(N) to pop out all the element from the stack 
// Total TC: 2 * O(N) : O(2N)
// SC: O(N) : For stack
class Solution3 {
    fun(arr) {
      const stack = [];
      const n = arr.length; 

      let maxArea = 0;

      for(let i = 0; i < n; i++) {
        while(stack.length !== 0 && arr[stack.at(-1)] >= arr[i]) {
            const element = stack.pop();
            const nse = i;
            const pse = stack.length === 0 ? -1 : stack.at(-1);
            maxArea = Math.max((arr[element] * (nse - pse - 1)), maxArea);
        };
        stack.push(i);
      };

      console.log(maxArea);

      while(stack.length !== 0) {
        const element = stack.pop();
        const nse = n;
        const pse = stack.length === 0 ? -1 : stack.at(-1);
        maxArea = Math.max(arr[element] * (nse - pse - 1), maxArea);
      };

      return maxArea;
    };
};

// Intuition: When I am in an element I need I have the previous smaller element(pse) of that element since I am traversed till that element 
// But in no world I can have the next smaller element(nse) of that element since I have no idea of the elements on the higher indexes than the current index since I have not yet travered them
// So the intuition is is some way I may have known the earlier indexes (some way I need the above elements information)
// Being in the current element I can never know about the higher indexes elements
// But: If I somehow move backwards than being in the backward elements I can have the information of some of the earlier elements in turn I may have the nse of the earlier elements when I am in a current index

// Note: I need to traveler the entire array since I need all the elements information for me to know the area in each elements
// Without traversing I can never have that information
// That's the idea:
// 1. traveler when the element in stack is greater or equal pop or kick it out of the stack . Kicking it out means touching it
// Touching an element meaning now we will calculate its area : If it is kicking out it is not smaller but greater than the current element
// So the current element is nse of the popped or kicked out element(consider the index).
// we have the nse index of the popped element.
// The pse will the top element of the stack or now or the previous index of the popped out element.
// So calculate the area of the kicked/popped out element. 

// lastly two idea: 
// If the stack is empty in the middle will popping out the stack than the pse will be -1 since no previous stack elemet of the popped out element exist
// If after travering the entire array some elements still remains in the stack
// Then those elements nse doesnot exist , since thats the reason they where never kicked out of the stack and touched
// So there nse will be length of the array(n)


let largestRectangleArea3 = function(heights) {
    const solution = new Solution3();
    return solution.fun(heights);
};

// Test cases 
// const heights3 = [2,1,5,6,2,3];
const heights3 = [2,4];

console.log(largestRectangleArea3(heights3));
