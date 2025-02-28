// Strivers + GFG(Plat) + Leetcode
// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Using the way I learned earlier

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
    }
    console.log(result.slice(0, -4)); // Remove trailing ' -> '
  };
};

// Using dummyNode approach
// class Solution {
//   fun(l1, l2) {
//     let c1 = l1;
//     let c2 = l2;
//     const dummyNode = new Node(-1);
//     let temp = dummyNode;
//     while(c1 !== null && c2 !== null) {
//       if(c1.val <= c2.val) {
//         temp.next = c1;
//         temp = temp.next;
//         c1 = c1.next;
//       } else {
//         temp.next = c2;
//         temp = temp.next;
//         c2 = c2.next;
//       }
//     }
//     if(c1 !== null) {
//       temp.next = c1
//     }
//     if(c2 !== null) {
//       temp.next = c2;
//     }
//     return dummyNode.next;
//   };
// };


// Using MergeSort
class Solution {
  mergeLL(l1, l2) {
    const dummyNode = new Node(-1);
    let temp = dummyNode;
    let c1 = l1; 
    let c2 = l2;
    while(c1 !== null && c2 !== null) { // Also the length of l1 and l2;
      if(c1.val <= c2.val) {
        temp.next = c1;
        temp = temp.next;
        c1 = c1.next;
      } else {
        temp.next = c2;
        temp = temp.next;
        c2 = c2.next;
      }
    }
    if(c1 !== null) {
      temp.next = c1;
    }
    if(c2 !== null) {
      temp.next = c2;
    }
    return dummyNode.next;
  };
  fun(l1, l2) {
    return this.mergeLL(l1, l2);
  };
};


// const list1 = [1, 2, 4];
// const list2 = [1, 3, 4];

// Converted input arrays to LinkedLists
const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(4);

const list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(4);

const mergeTwoLists = function(list1, list2) {
  const solution = new Solution();
  return solution.fun(list1, list2);    
};

list1.printLL(mergeTwoLists(list1, list2));