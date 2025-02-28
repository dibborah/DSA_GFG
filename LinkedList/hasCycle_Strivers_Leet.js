// Problem Statement: 
// Strivers + GFG(Plat) + Leetcode problem: 
// 141. Linked List Cycle(Leetcode)

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

// Modifying Node of LL structure
// Addition of a new property in the LL structure
// Will take extra spaces
// class Solution {
//   printLL(head, k = 5) {
//     let curr = head;
//     let result = '';
//     let pos = 1;
//     while (curr != null && pos < k) {
//       result += curr.val + ' -> ';
//       curr = curr.next;
//       pos++;
//     };
//     console.log(result.slice(0, -4)); // Remove trailing ' -> '
//   };
//   fun(head) {
//     let curr = head;
//     while(curr !== null) {
//       if(curr.check === -1) {
//         return true;
//       }
//       curr.check = -1;
//       curr = curr.next;
//     };
//     return false;
//   };
// };

// Modifying the pointers or references of LL
// Changes LL but doesnot add anything new
// Without auxilary space
// But changing the pointers destroys the LL.
// This way we cannot recreate the original LL.
// class Solution {
//   printLL(head, k = 5) {
//     let curr = head;
//     let result = '';
//     let pos = 1;
//     while (curr != null && pos < k) {
//       result += curr.val + ' -> ';
//       curr = curr.next;
//       pos++;
//     };
//     console.log(result.slice(0, -4)); // Remove trailing ' -> '
//   };
//   fun(head) {
//     let curr = head;
//     const dummyNode = new Node(-1);
//     while(curr !== null) {
//       const nextNode = curr.next;
//       if(curr.next === dummyNode) {
//         return true;
//       }
//       curr.next = dummyNode;
//       curr = nextNode;
//     };
//     return false;
//   };
// };



// 3rd approch
// Using Hash set
// Set takes on avg O(1) Time and space complexity for searching and insertion of values
// This algo TC and SC is O(n).
// Benefits of this algo:
// No adding a new property to the Node structure
// Not manipulating the LL so original LL is retained and can  be of further use.

// In set we are not storing contents inside objects actually,
// we are storing objects addresses
class Solution {
  fun(head) {
    const hashSet = new Set();
    let curr = head;
    while(curr !== null) {
      if(hashSet.has(curr)) {
        return true;
      }
      hashSet.add(curr);
      curr = curr.next;
    }
    return false;
  };
};

const list = new Node(10);
list.next = new Node(15);
list.next.next = new Node(12);
list.next.next.next = new Node(20);
list.next.next.next.next = list.next;


const hasCycle = function(head) {
  const solution = new Solution();
  return solution.fun(head);
};

console.log(hasCycle(list));