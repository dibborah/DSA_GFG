// Strivers
// Leetcode question number and statement
// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    print() {
      console.log(this.items.join(' '));
    }
  }

// 1st Approach using two stack
// TC: O(2N) ~~ O(N)
// SC: O(2N) ~~ O(N)
//   class Queue {
//     constructor() {
//         this.s1 = new Stack();
//         this.s2 = new Stack();
//     };

// In this approach the push method is expensive
//     push(x) {
//       while(this.s1.isEmpty() === false) {
//         this.s2.push(this.s1.pop());
//       };

//       this.s1.push(x);
//       while(this.s2.isEmpty() === false) {
//         this.s1.push(this.s2.pop());
//       }
//     };

//     pop() {
//       return this.s1.pop();
//     };

//     peek() {
//         return this.s1.peek();
//     };

//     empty() {
//       return this.s1.isEmpty();
//     };

// };


// Approach 2: Sinle loop, slightly more Optimized
// In this approach instead of push : Peek/top & pop() is made expensive
class Queue {
    constructor() {
        this.input = new Stack();
        this.output = new Stack();
    };

    // In this approach the push method is made less expensive
    // TC of push(): O(1)
    push(x) {
      this.input.push(x);
    };

    // pop made expensive
    // TC of pop() here: O(N)
    pop() {
      if(!this.output.isEmpty()) {
          return this.output.pop();
      } else {
        while(!this.input.isEmpty()) {
          this.output.push(this.input.pop())
        };
        return this.output.pop();
      }
    };

    // peek()/top() made expensive
    // TC of pop() here: O(N)
    peek() {
      if(!this.output.isEmpty()) {
          return this.output.peek();
      } else {
        while(!this.input.isEmpty()) {
          this.output.push(this.input.pop())
        };
        return this.output.peek();
      }
    };

    empty() {
      return this.output.size() > 1 || this.input.size() > 1;
    };

};

const queue = new Queue()
  
// queue.push(10);

// queue.push(20);
// queue.push(30);
  
console.log(queue);

// console.log(queue.pop());
// console.log(queue.peek());
console.log(queue.empty());