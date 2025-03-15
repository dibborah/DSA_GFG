// 2 approaches to reverse a queue

// gfg question

// a. Iterative
// b. Recursive


class MyStack {
    constructor() {
        this.arr = new Array();
        this.top = -1;
    };
    isEmpty() {
      return this.arr.length === 0;
    }
};



// Function to push an integer into the stack.
MyStack.prototype.push =
  function(x) {
    this.arr.push(x);
};

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

// Simple queue
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

function reverseQueue(q) {
    const s = [];
    console.log(q)
    while(!q.isEmpty()) {
      s.push(q.pop());
    };

    while(s.length !== 0) {
      q.push(s.pop());
    };

  };

const q1 = new MyQueue();
q1.push(1);
q1.push(2);
q1.push(3);

console.log(q1);
reverseQueue(q1);
console.log(q1);






