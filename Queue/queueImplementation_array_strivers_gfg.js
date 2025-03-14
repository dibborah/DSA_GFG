// Queue Using Array:

// Implement a Queue using an Array. Queries in the Queue are of the following type:
// (i) 1 x   (a query of this type means  pushing 'x' into the queue)
// (ii) 2     (a query of this type means to pop an element from the queue and print the popped element. If the queue is empty then return -1)

// We just have to implement the functions push and pop and the driver code will handle the output.

//User function Template for javascript

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
};

const queue = new MyQueue();

queue.push(2);
queue.push(3);
console.log(queue)
console.log(queue.pop());
console.log(queue)
queue.push(4);
console.log(queue)
console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

