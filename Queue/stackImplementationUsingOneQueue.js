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

class MyStack{
    constructor() {
      this.q1 = new MyQueue();
    };
    // push(x) {
    //   const s = [];

    //   console.log(this.q1)
      
    //   console.log(this.q1.pop());
    //   while(!this.q1.isEmpty) {
    //     console.log(this.q1.pop());
    //     s.push(this.q1.pop());
    //   };

    //   console.log(s)

    //   s.push(x);

    //   while(s.length) {
    //     this.q1.push(stack.pop());
    //   };
    // };

    push(x) {
        const s = [];
        while(this.q1.isEmpty() === false) {
          s.push(this.q1.pop());
        }
        s.push(x);
        this.q1.push(x);
    }
    pop() {
      if(this.q1.isEmpty()) return -1;
      return this.q1.pop();
    };
    
    top() {
      if(this.q1.isEmpty()) return -1;
      return this.q1.frontItem();
    };
    
    empty() {
      return this.q1.isEmpty();
    };
};

// Example usage:
const stack = new MyStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);

console.log(stack.top()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.top()); // Output: 20
console.log(stack.empty()); // Output: false
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.empty()); // Output: true