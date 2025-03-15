// Dynamic and simple queue
// No the rear and front one
// class MyQueue {
//     constructor() {
//       this.item = [];
//     };  

//     isEmpty() {
//       return this.item.length === 0;
//     }; 
 
//     pop() {
//       if(this.isEmpty()) {
//         return -1;
//       };
//       return this.item.shift();
//     };

//     push(x) {
//       this.item.push(x);
//     };  

//     size() {
//       return this.item.length;
//     };

//     frontItem() {
//       if(this.isEmpty()) {
//           return -1;
//       };
//       return this.item[0];
//     }
// };

class MyQueue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        // this.arr = new Array(100005);
        this.arr = new Array(5);
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
  
// class based approach
class MyStack {
  constructor() {
    this.q1 = new MyQueue();
  };

  swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  // reversing a queue
  push(x) {
    let a = this.front;
    let b = this.rear;

    while(a < b) {
    //   this.swap(this.q1.item, a, b);
      const temp = this.q1.item[a];
      this.q1.item[a] = this.q1.item[b];
      this.q1.item[b] = temp;
      a++;
      b--
    };

    
    this.q1.push(x);

    let i = this.front;
    let j = this.rear;

    while(i < j) {
    //   this.swap(this.q1.item, i, j);
      const temp = this.q1.item[i];
      this.q1.item[i] = this.q1.item[j];
      this.q1.item[j] = temp;
      i++;
      j--
    };

  };

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
