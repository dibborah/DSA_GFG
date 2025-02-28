// Problem Statement: 
// Strivers + GFG(Plat) + Leetcode problem: 
// 237. Delete Node in a Linked List

// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:

// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const list = new Node(4);
list.next = new Node(5);
list.next.next = new Node(1);
list.next.next.next = new Node(9);

class Solution {
  printLL(head) {
    let curr = head;
    let result = '';
    let pos = 1;
    while (curr != null) {
      result += curr.val + ' -> ';
      curr = curr.next;
      pos++;
    };
    console.log(result.slice(0, -4)); // Remove trailing ' -> '
  };
//   my solution
//   fun(node){
//     let curr = node;
//     let prev = null;
//     while(curr.next !== null) {
//       const nextNode = curr.next;
//       curr.val = nextNode.val;
//       prev = curr;
//       curr = nextNode;
//     };
//     if(prev !== null) {
//         prev.next = null;
//     };
//   };
   fun(node) {
    let curr = node;
    curr.val = curr.next.val;
    curr.next = curr.next.next;
   };
};

const solution = new Solution();
const deleteNode = function(node) {
  solution.fun(node);
};

solution.printLL(list);
deleteNode(list.next);
solution.printLL(list);


