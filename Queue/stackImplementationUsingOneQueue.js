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

    push(x) {
      this.q1.push(x);

      let size = this.q1.size();
      while(size > 1) {
        this.q1.push(this.q1.pop());
        size--;
      };

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