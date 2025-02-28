// 160. Intersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const listA = new Node(4);
listA.next = new Node(1);
listA.next.next = new Node(8);
listA.next.next.next = new Node(4);
listA.next.next.next.next = new Node(5);

const listB = new Node(5);
listB.next = new Node(6);
listB.next.next = new Node(1);
listB.next.next.next = listA.next.next;

class Solution {
  printLL(head) {
    let curr = head;
    let result = '';
    while (curr != null) {
      result += curr.val + ' -> ';
      curr = curr.next;
    };
    console.log(result.slice(0, -4)); // Remove trailing ' -> '
  };
  fun(list1, list2) {
  };
};
 
const getIntersectionNode = function(headA, headB) {
    const solution = new Solution();
    solution.printLL(headA);
    solution.printLL(headB);
};

getIntersectionNode(listA, listB);
