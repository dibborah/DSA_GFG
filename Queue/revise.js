
class MyQueue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(100005);
    };
  
    //Function to push an element x in a queue.
    push(x) {
      this.arr[this.rear] = x;
      this.rear++
    };
  
    //Function to pop an element from queue and return that element.
    pop() {
      if(this.rear === this.front) {
          return -1;
      };
      let poppedElement = this.arr[this.front];
      this.front++;
      return poppedElement;
    };

    isEmpty() {
      return this.rear === this.front;
    };

    frontItem() {
      if(this.rear === this.front) {
          return -1;
      };
      return this.arr[this.front];
    };
};

  
let MyStack = function() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
};


// My solution of using a single queue
// MyStack.prototype.push = function(x) {
//     this.q2.push(x);

//     while (!this.q1.isEmpty()) {
//         this.q2.push(this.q1.pop());
//     };

//     // Swap both queues
//     const temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;    
// };


MyStack.prototype.push = function(x) {
    this.q2.push(x);

    while (!this.q1.isEmpty()) {
        this.q2.push(this.q1.pop());
    };

    // Swap both queues
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;    
};


MyStack.prototype.pop = function() {
    if (this.q1.isEmpty()) return -1;
    return this.q1.pop();    
};

MyStack.prototype.top = function() {
    if (this.q1.isEmpty()) return -1;
    return this.q1.frontItem();    
};

MyStack.prototype.empty = function() {
    return this.q1.isEmpty();    
};

// Example usage:
const stack = new MyStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.top()); // Output: 20
console.log(stack.empty()); // Output: false
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.empty()); // Output: true