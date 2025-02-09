class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    };
};

// printLL
// search
// length
// insert : insertAtHead, insertAtTail, insertAtPos

class LinkedList {
  insertAtHead(val, head) {
    const node = new Node(val);
    if(!head) {
      return node;
    };
    node.next = head;
    return node;
  };

  insertAtTail(val, head) {
    const node = new Node(val);
    if(!head) {
        return node;
    };
    let newNode = head;
    while(newNode.next !== null) {
      newNode = newNode.next;
    }
    newNode.next = node;
    return head;
  }
  
  insertAtPos(val, pos, head) {
    const node = new Node(val);
    if(pos === 1) {
      node.next = head;
      return node;            
    }

    let prev = null; let curr = head; let count = 1;
    while (count !== pos && curr !== null) {
      prev = curr;
      curr = curr.next;
      count++;
    };

    if (curr === null) {
      console.log('Position out of bound');
      return;
    };

    node.next = prev.next;
    prev.next = node;
    return node;
  };

  printLL(head) {
    if(head === undefined){
      console.log('Head does not exist');
      return;
    }
    let newNode = head;
    let ll = '';
    while(newNode !== null) {
      ll += newNode.val + ' -> '
      newNode = newNode.next;
    }
    console.log(ll.slice(0, -4));
  };

  length(head) {
    let curr = head;
    let count = 0;
    while(curr !== null) {
      count++;
      curr = curr.next;
    };
    console.log(count);
  };

  search(key, head) {
    let curr = head;
    while(curr !== null) {
      if(curr.val === key) {
        console.log(key + ': key found');
        return;
      };
      curr = curr.next;
    };

    console.log(key + ': not found');    
  };

  deleteAtPos(pos, head) {
    if(pos === 1) {
      head = head.next;
      return head;
    };
    let prev = null; let curr = head; let count = 1;
    while(count !== pos && curr !== null) {
      prev = curr;
      curr = curr.next;
      count++
    };
    if(curr === null) {
      console.log('position out of bound');
      return;
    };
    prev.next = curr.next;
    return head;
  };  
};

const list = new LinkedList();

const head = list.insertAtHead(5);
list.insertAtTail(6, head);
list.insertAtTail(7, head);

list.insertAtTail(8, head);
list.insertAtTail(9, head);
list.insertAtTail(10, head);

// list.insertAtTail(11, head);
// const newHead = list.insertAtHead(5, head);
// const newHead2 = list.insertAtPos(0, 1, newHead);

// list.printLL(newHead2);
// list.length(newHead2);
// list.search(67, head);


list.printLL(head);
const newHead = list.deleteAtPos(6, head);
list.printLL(newHead);


