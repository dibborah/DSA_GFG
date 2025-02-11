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

const list1 = new LinkedList();
const list2 = new LinkedList();

// const head1 = list1.insertAtHead(1);
// list1.insertAtTail(2, head1);
// list1.insertAtTail(4, head1);

// const head2 = list2.insertAtHead(1);
// list2.insertAtTail(3, head2);
// list2.insertAtTail(4, head2);


// list.insertAtTail(9, head);
// list.insertAtTail(10, head);

// list.insertAtTail(11, head);
// const newHead = list.insertAtHead(5, head);
// const newHead2 = list.insertAtPos(0, 1, newHead);

// list.printLL(newHead2);
// list.length(newHead2);
// list.search(67, head);


// list.printLL(head);
// const newHead = list.deleteAtPos(6, head);
// list.printLL(newHead);


// 2    ->  4   ->  4   ->  2
// prev -> curr
// 2 -> 4 -> 2


// class Solution {
//   // Function to remove duplicates from sorted linked list.
//   removeDuplicates(head) {
//     let prev = head;
//     let curr = head.next;
//     while(curr !== null) {
//       if(prev.val !== curr.val) {
//         prev = curr;
//         curr = curr.next;
//       }else {
//         curr = curr.next;
//         prev.next = curr;
//       };
//     };
//     return head;
//   };
// };


// const solution = new Solution();
// const newHead = solution.removeDuplicates(head);
// list.printLL(newHead);



// User function Template for javascript
/**
 * Definition for singly Link List Node
 * class Node{
 *     constructor(x){
 *         this.data = x
 *         this.next = null
 *     }
//  * }
//  * @param {Node} head
//  * @returns {Node}
//  */

// class Solution {
//   // Function to move last element to front in a linked list.
//   moveToFront(head) {
//     let prev = null
//     let curr = head;
//     while(curr.next !== null) {
//       prev = curr;
//       curr = curr.next;
//     };

//     if(prev === null)
//       return curr;

//     prev.next = null;
//     curr.next = head;
//     return curr;
//   };
// };


// list.printLL(head);
// const solution = new Solution();
// if (!head) return head;
// const newHead = solution.moveToFront(head);
// list.printLL(newHead);



// Merge two sorted linked lists

// Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the sorted merged list.

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// list1.printLL(head1);
// list2.printLL(head2);

// class Solution {
//   sortedMerge(head1, head2) {
//     let dummyNode = new Node(-1);
//     let temp = dummyNode;
//     let c1 = head1;
//     let c2 = head2;
//     while(c1 !== null && c2 !== null ) {
//       if(c1.val < c2.val) {
//         temp.next = c1;
//         temp = c1;
//         c1 = c1.next;
//         temp.next = null;      
//       }else{
//         // curr2.val < curr1.val
//         temp.next = c2;
//         temp = c2;
//         c2 = c2.next;
//         temp.next = null;
//       }
//     }
//     if(c2 === null) {
//       temp.next = c1;
//     }else {
//       temp.next = c2;
//     };
//     return dummyNode.next;
//   };
// };

// const solution = new Solution();
// const sortedHead = solution.sortedMerge(head1, head2);
// list1.printLL(sortedHead)

// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


const head1 = list1.insertAtHead(1);
list1.insertAtTail(2, head1);
list1.insertAtTail(3, head1);
list1.insertAtTail(4, head1);
list1.insertAtTail(5, head1);

list1.printLL(head1);

// class Solution {
//   fun(head) {
//     let curr = head;
//     while(curr)
//   };
// };

// var reorderList = function(head) {
//   const solution = new Solution(head);
//   solution.fun(head);    
// };

class Solution {
  reverseLL(head){
    let prev = null;
    let curr = head;
    while(curr !== null) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr
      curr = nextNode;
    };
    return prev;
  };

};

const solution = new Solution();
const newHead = solution.reverseLL(head1);
list1.printLL(newHead);

