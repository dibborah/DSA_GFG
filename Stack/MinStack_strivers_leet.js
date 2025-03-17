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


// class MinStack {
//     constructor() {
//         this.min_stack = [];
//     };

//     push(x) {
//         const getNewMin = () => {
//            const currentMin = this.getMin();
//            return  x < currentMin ? x : currentMin;
//         };
//         const obj = {
//           min: this.min_stack.length === 0 ? x : getNewMin(),
//           val : x,
//         };
//         this.min_stack.push(obj);
//     };

//     pop() {
//         const element = this.min_stack.pop().val;
//         return element;
//     };

//     top() {
//         return this.min_stack.at(-1).val;
//     };

//     getMin() {
//         return this.min_stack.at(-1).min;
//     };
// }


let MinStack = function() {
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
    const getNewMin = () => {
        const currentMin = this.getMin();
        return  val < currentMin ? val : currentMin;
     };
     const obj = {
       min: this.min_stack.length === 0 ? val : getNewMin(),
       val,
     };
     this.min_stack.push(obj);    
};

/**
 * @return {void}
 */

MinStack.prototype.pop = function() {
    const element = this.min_stack.pop().val;
    return element;    
};

/**
 * @return {number}
 */

MinStack.prototype.top = function() {
    return this.min_stack.at(-1).val;  
};

/**
 * @return {number}
 */

MinStack.prototype.getMin = function() {
    return this.min_stack.at(-1).min;    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);

console.log(obj.getMin());
console.log(obj.pop());

console.log(obj.top());
console.log(obj.getMin());


