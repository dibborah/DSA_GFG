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


// TC: O(1)
// SC: O(2 * N): We are now storing a pair of data in an object structure:
// Other property min we are storing

// class MinStack1 {
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


let MinStack_leet1 = function() {
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack_leet1.prototype.push = function(val) {
    // const getNewMin = () => {
    //     const currentMin = this.getMin();
    //     return  val < currentMin ? val : currentMin;
    //  };
     const obj = {
    //    min: this.min_stack.length === 0 ? val : getNewMin(),
       min: this.min_stack.length === 0 ? val : Math.min(val, this.min_stack.at(-1).min),
       val,
     };
     this.min_stack.push(obj);    
};

/**
 * @return {void}
 */

MinStack_leet1.prototype.pop = function() {
    const element = this.min_stack.pop().val;
    return element;    
};

/**
 * @return {number}
 */

MinStack_leet1.prototype.top = function() {
    return this.min_stack.at(-1).val;  
};

/**
 * @return {number}
 */

MinStack_leet1.prototype.getMin = function() {
    return this.min_stack.at(-1).min;    
};

/** 
 * Your MinStack_leet1 object will be instantiated and called as such:
 * var obj = new MinStack_leet1()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const obj = new MinStack_leet1();
obj.push(-2);
obj.push(0);
obj.push(-3);

console.log(obj.getMin());
console.log(obj.pop());

console.log(obj.top());
console.log(obj.getMin());


// Optimized min_Stack approach (using Mathematical formula)
// TC: O(1);
// SC: O(N);
class MinStack2 {
  constructor() {
    this.min_stack = [];
    this.min = Infinity;
  };

  push(x) {
    if(this.min_stack.length === 0) {
        this.min_stack.push(x);
        this.min = x;
    } else {
        if (x < this.min) {
            this.min_stack.push(2 * x - this.min);
            this.min = x;
        } else {
            this.min_stack.push(x);
        };
    };
  };

  pop() {
    if (this.min_stack.length === 0) {
        return;
    } else {
        const x = this.min_stack.pop();
        if(x < this.min) {
            this.min = 2 * this.min - x;
        };
    };
  };

  top() {
    if (this.min_stack.length === 0) {
        return;
    } else {
        const x = this.min_stack.at(-1);
        if(x < this.min) {
            return this.min;
        } else {
            return x;
        };
    };
  };

  getMin() {
    return this.min;
  };
};

const obj2 = new MinStack(2);
obj2.push(-2);
obj2.push(0);
obj2.push(-3);

console.log(obj2.getMin());
console.log(obj2.pop());

console.log(obj2.top());
console.log(obj2.getMin());


// Leetcode boiler-plate format

// Most optimized solution(Using mathematical formula)
// TC: O(1)
// SC: O(N): Single element stack

let MinStack_leet2 = function () {
    this.min_stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack_leet2.prototype.push = function (val) {
    if (this.min_stack.length === 0) {
        this.min_stack.push(val);
        this.min = val;
    } else {
        if (val < this.min) {
            this.min_stack.push(2 * val - this.min);
            this.min = val;
        } else {
            this.min_stack.push(val);
        };
    };
};

/**
 * @return {void}
 */

MinStack_leet2.prototype.pop = function () {
    if (this.min_stack.length === 0) {
        return;
    } else {
        const val = this.min_stack.pop();
        if (val < this.min) {
            this.min = 2 * this.min - val;
        };
    };
};

/**
 * @return {number}
 */

MinStack_leet2.prototype.top = function () {
    if (this.min_stack.length === 0) {
        return;
    } else {
        const val = this.min_stack.at(-1);
        if (val < this.min) {
            return this.min;
        } else {
            return val;
        };
    };
};

/**
 * @return {number}
 */

MinStack_leet2.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack_leet2 object will be instantiated and called as such:
 * var obj = new MinStack_leet2()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


