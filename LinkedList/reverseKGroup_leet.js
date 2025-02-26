// 25. Reverse Nodes in k-Group(Leetcode).

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
  printLL(head) {
    let curr = head;
    let result = '';
    while (curr != null) {
        result += curr.val + ' -> ';
        curr = curr.next;
    };
    console.log(result.slice(0, -4)); // Remove trailing ' -> '
  };
};


// Converted input arrays to LinkedLists
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Node.js env in the kingfisher UI proj's

// Recursive solution
class Solution {
  fun(head, k) {
    let curr = head;
    let prev = null;
    let pos = 0;

    // First, count the number of nodes to check if there are enough nodes for reversal
    while (curr !== null && pos < k) {
      curr = curr.next;
      pos++;
    };

    if(pos < k) {
      return head;
    } else {
      pos = 0;
      curr = head;
    };
      

    while(curr !== null && pos < k) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
      pos++;
    };

    if(curr !== null) {
      const rest_head = this.fun(curr, k); 
      head.next = rest_head;
    };
    return prev;
  };
};

// TC: of the Recursive solution: Theta(n)
// SC: Theta(nk);

let reverseKGroup = function(head, k) {
  const solution = new Solution();
  return solution.fun(head, k);
};

list.printLL(reverseKGroup(list, 3));
 