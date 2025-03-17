// Strivers

// Leetcode problem no. and name: 
// 155. Min Stack

// Problem statement: 

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.


class Solution {
    constructor() {
        this.min_stack = [];
    };

    push(x) {
        const getNewMin = () => {
           const currentMin = this.getMin();
           return  x < currentMin ? x : currentMin;
        };
        const obj = {
          min: this.min_stack.length === 0 ? x : getNewMin(),
          val : x,
        };
        this.min_stack.push(obj);
    };

    pop() {
        const element = this.min_stack.pop().val;
        return element;
    };

    top() {
        return this.min_stack.at(-1).val;
    };

    getMin() {
        return this.min_stack.at(-1).min;
    };
}


// let MinStack = function() {
// };

/** 
 * @param {number} val
 * @return {void}
 */

// MinStack.prototype.push = function(val) {
    
// };

/**
 * @return {void}
 */

// MinStack.prototype.pop = function() {
    
// };

/**
 * @return {number}
 */

// MinStack.prototype.top = function() {
    
// };

/**
 * @return {number}
 */

// MinStack.prototype.getMin = function() {
    
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const solution = new Solution();
solution.push(-2);
solution.push(0);
solution.push(-3);

console.log(solution.getMin());
console.log(solution.pop());

console.log(solution.top());
console.log(solution.getMin());

