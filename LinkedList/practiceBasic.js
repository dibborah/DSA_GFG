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

  printLL(head) {
    let newNode = head;
    let ll = '';
    while(newNode !== null) {
      ll += newNode.val + ' -> '
      newNode = newNode.next;
    }
    console.log(ll);
  };
};

const list = new LinkedList();

const head = list.insertAtHead(6);
list.insertAtTail(7, head);
list.insertAtTail(8, head);
list.insertAtTail(9, head);
list.insertAtTail(10, head);
list.insertAtTail(11, head);

const newHead = list.insertAtHead(5, head);

list.printLL(newHead);

