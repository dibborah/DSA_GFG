// Leetcode question number and name
// 225. Implement Stack using Queues

// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.


// Here I am using two queue and at last swapping the two queues

// The TC is O(n) since I am iteration a whole queue element by element for swapping purpoose
// SC: O(n) : 2N(needing 2 queue) or near O(n)

class MyQueue {
  constructor() {
    this.item = [];
  };  
  isEmpty() {
    return this.item.length === 0;
  };  
  pop() {
    if(this.isEmpty()) {
      return -1;
    };
    return this.item.shift();
  };  
  push(x) {
    this.item.push(x);
  };  
  size() {
    return this.item.length;
  };
  frontItem() {
    if(this.isEmpty()) {
        return -1;
    };
    return this.item[0];
  }
};


// class based approach
// class MyStack {
//   constructor() {
//     this.q1 = new MyQueue();
//     this.q2 = new MyQueue();
//   };

//   push(x) {
//     this.q2.push(x);

//     while(!this.q1.isEmpty()) {
//       this.q2.push(this.q1.pop());
//     };

//     // swap both the queue;

//     const temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;
//   };

//   pop() {
//     if(this.q1.isEmpty()) return -1;
//     return this.q1.pop();
//   };

//   top() {
//     if(this.q1.isEmpty()) return -1;
//     return this.q1.frontItem();
//   };

//   isEmpty() {
//     return this.q1.size() === 0;
//   };
// };

let MyStack = function() {
  this.q1 = new MyQueue();
  this.q2 = new MyQueue();
};


/** 
 * @param {number} x
 * @return {void}
 */

MyStack.prototype.push = function(x) {
    console.log(this);
    this.q2.push(x);

    while (!this.q1.isEmpty()) {
        this.q2.push(this.q1.pop());
    };

    // Swap both queues
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;    
};

let obj = new MyStack();
console.log(obj);

/**
 * @return {number}
 */

MyStack.prototype.pop = function() {
    if (this.q1.isEmpty()) return -1;
    return this.q1.pop();    
};

/**
 * @return {number}
 */

MyStack.prototype.top = function() {
    if (this.q1.isEmpty()) return -1;
    return this.q1.frontItem();    
};

/**
 * @return {boolean}
 */

MyStack.prototype.empty = function() {
    return this.q1.isEmpty();    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */




