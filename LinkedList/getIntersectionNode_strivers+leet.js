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

// last test case(Equal nodes) test case
const listA = new Node(2);
listA.next = new Node(2);
listA.next.next = new Node(4);
listA.next.next.next = new Node(5);
listA.next.next.next.next = new Node(4);

const listB = new Node(2);
listB.next = new Node(2);
listB.next.next = new Node(4);
listB.next.next.next = new Node(5);
listB.next.next.next.next = listA.next.next.next.next;

// 1st test case
// const listA = new Node(4);
// listA.next = new Node(1);
// listA.next.next = new Node(8);
// listA.next.next.next = new Node(4);
// listA.next.next.next.next = new Node(5);

// const listB = new Node(5);
// listB.next = new Node(6);
// listB.next.next = new Node(1);
// listB.next.next.next = listA.next.next;

// 2nd test case
// const listA = new Node(1);
// listA.next = new Node(9);
// listA.next.next = new Node(1);
// listA.next.next.next = new Node(2);
// listA.next.next.next.next = new Node(4);

// const listB = new Node(3);
// listB.next = new Node(2);
// listB.next.next = listA.next.next.next.next;

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
  // Solution via adding a new property visited to the Node's structure
//   fun(head1, head2) {
//     let c1 = head1;
//     let c2 = head2;
//     while(c1 !== null && c2 !== null) {
//       if(c1.visited) {
//         return c1;
//       };
//       if(c2.visited) {
//         return c2;
//       }
//       c1.visited = true;
//       if(c2.visited) {
//         return c2;
//       }
//       c2.visited = true;
//       c1 = c1.next;
//       c2 = c2.next;
//     };
//     while(c1 !== null) {
//       if(c1.visited) {
//         return c1;
//       };
//       c1.visited = true;
//       c1 = c1.next;
//     }
//     while(c2 !== null) {
//       if(c2.visited) {
//         return c2;
//       }
//       c2.visited = true;
//       c2 = c2.next;
//     }
//     return null;
//   };

// Note : Cannot use this dummyNode's approach as its is not allowed as per
// the Leetcode question 
// // solution via using a dummyNode
//   fun(head1, head2) {
//     const dummyNode = new Node(-1);
//     let c1 = head1;
//     let c2 = head2;
//     while(c1 !== null && c2 !== null) {
//       const nextC1 = c1.next;
//       const nextC2 = c2.next;

//       if(c1.next === dummyNode) {
//         return c1;
//       };
//       if(c2.next === dummyNode) {
//         return c2;
//       };

//       c1.next = dummyNode;
//       if(c2.next === dummyNode) {
//         return c2;
//       };
//       c2.next = dummyNode;
//       c1 = nextC1;
//       c2 = nextC2;
//     };
//     while(c1 !== null) {
//       const nextC1 = c1.next;
  
//       if(c1.next === dummyNode) {
//         return c1;
//       };
  
//       c1.next = dummyNode;
//       c1 = nextC1;
//     };
//     while(c2 !== null) {
//       const nextC2 = c2.next;  
//       if(c2.next === dummyNode) {
//         return c2;
//       };
  
//       c2.next = dummyNode;
//       c2 = nextC2;
//     };
//     return null;
//   };

// Approach 3: Using Hash Set or Set() in JS
//     fun(head1, head2) {
//       const hashSet = new Set();
//       for(let curr = head1; curr !== null; curr = curr.next) {
//         hashSet.add(curr);
//       };
//       for(let curr = head2; curr !== null; curr = curr.next) {
//         if(hashSet.has(curr)) {
//             return curr;
//         };
//       };
//       return null;
//     };

// Approach 4: Using Maths: No Node structure modification + O(1) extra space
  fun(head1, head2) {
    let countHead1 = 0;
    for(let curr = head1; curr !== null; curr = curr.next) {
        countHead1++;
    };

    let countHead2 = 0;
    for(let curr = head2; curr !== null; curr = curr.next) {
        countHead2++;
    };

    let diffInCount = Math.abs(countHead1 - countHead2);

    let curr1 = countHead1 > countHead2 ? head1 : head2;
    let curr2 = countHead1 > countHead2 ? head2 : head1;

    while(diffInCount > 0) {
        curr1 = curr1.next;
        diffInCount--;
    };

    while(curr1 !== null && curr2 !== null) {
      if(curr1 === curr2) {
        return curr1;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    };
    return null;
  };
};
 
const getIntersectionNode = function(headA, headB) {
  const solution = new Solution();
  return solution.fun(headA, headB);
};

console.log(getIntersectionNode(listA, listB));
