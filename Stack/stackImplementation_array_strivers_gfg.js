// Implement stack using array: gfg

// Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack. The push() method takes one argument, an integer 'x' to be pushed into the stack and pop() which returns an integer present at the top and popped out from the stack. If the stack is empty then return -1 from the pop() method.

// Note: The input is given in form of queries. Since there are two operations push() and pop(), there is two types of queries as described below:
// (i) 1 x   (a query of this type means  pushing 'x' into the stack)
// (ii) 2     (a query of this type means to pop an element from the stack and print the popped element)
// Input contains separated by space and as described above. 

// User function Template for javascript

/**
 * @param {number} x
 */

class MyStack {
    constructor() {
        this.arr = new Array();
        this.top = -1;
    };
};



// Function to push an integer into the stack.
MyStack.prototype.push =
  function(x) {
    this.arr.push(x);
};

const stack = new MyStack()
stack.push(67);

console.log(stack);


/**
 * @returns {number}
 */

// Function to remove an item from top of the stack.
MyStack.prototype.pop = function() {
  if(this.arr.at(-1)) {
    return this.arr.pop();
  };
  return -1;
};

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


