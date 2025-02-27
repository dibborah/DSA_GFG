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
  list.random = null;

  list.next.next = new Node(11);
  list.next.random = 0;

  list.next.next.next = new Node(10);
  list.next.next.random = 4;

  list.next.next.next.next = new Node(1);
  list.next.next.next.random = 2;

  list.next.next.next.next.next = null;
  list.next.next.next.next.random = 0;
  
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
  fun(head) {
  };
};

const solution = new Solution();
// original List
solution.printLL(list);

var copyRandomList = function(head) {
};