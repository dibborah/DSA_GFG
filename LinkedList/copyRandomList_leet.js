// Leetcode problem
// 138. Copy List with Random Pointer
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// selenium
// data scraping
// data cleaning

/**
 * @param {_Node} head
 * @return {_Node}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  };
};
  
const list = new Node(7);
list.next = new Node(13);
list.next.next = new Node(11);
list.next.next.next = new Node(10);
list.next.next.next.next = new Node(1);

list.random = null;
list.next.random = list;
list.next.next.random = list.next.next.next.next;
list.next.next.next.random = list.next.next;
list.next.next.next.next.random = list;
  
class Solution {
  printLL(head) {
    let curr = head;
    let result = '';
    let pos = 1;
    while (curr != null) {
      result += curr.val + ' ' + curr.random + ' -> ';
      curr = curr.next;
      pos++;
    };
    console.log(result.slice(0, -4)); // Remove trailing ' -> '
  };
  // Note: Cannot be solved using spread operator
  // Complecacy will increase
  
  // Solve using Hash map
  // TC: O(n)
  // SC: O(n)// Hash map
  // fun(head) {
  //   let c1 = head;
  //   let m = new Map();

  //   while(c1 !== null) {
  //     m.set(c1, new Node(c1.val));  // deep copy
  //     c1 = c1.next;      
  //   };

  //   let c2 = head;
  //   while(c2 !== null) {
  //   // adding other information to the deeply copied LList
  //     let clone = m.get(c2);
  //     clone.next = m.get(c2.next) ?? null;  
  //     clone.random = m.get(c2.random) ?? null;   
  //     c2 = c2.next;
  //   };
  //   return m.get(head);
  // };

  // Solve using O(1) SC:
  // optimized solution
  fun(head) {

    // 1st part is two create a clone node beside each original node comprising the same value: Done
    let c1 = head;
    while(c1 !== null) {
      const node = new Node();
      const nextNode = c1.next;
      node.val = c1.val;
      c1.next = node;
      node.next = nextNode;
      c1 = nextNode
    };

    // 2nd part of setting the random pointers: Done
    let c2 = head;
    while(c2 !== null) {

      // if(c2.random === null) {
      //   c2.next.random = null;
      //   c2 = c2.next.next;
      // };

      // if(c2 === null) break;

      c2.next.random = (c2.random === null) ? null : c2.random.next;
      // c2.next.random = c2.random.next;
      c2 = c2.next.next;
    };

    // this.printLL(head);

    // 3rd part is separating the two LLists: Pending
    let c3 = head;
    const newHead = head.next;
    let c4 = newHead;
    while(c3 !== null) {
      const nextNode = c3.next.next;
      const nextCloneNode = c4.next === null ? null : c4.next.next;

      c3.next = nextNode;
      c4.next = nextCloneNode;

      c3 = nextNode;
      c4 = nextCloneNode;
    };
    return head;
  };
};

const solution = new Solution();

// original List
// console.log('b/4');
// solution.printLL(list);

let copyRandomList = function(head) {
  return solution.fun(head);
};

// console.log('a/f');
copyRandomList(list);

