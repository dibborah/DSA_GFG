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
  merge(l1, l2) {
    const result = [];
    let i = 0; 
    let j = 0;
    let k = 0; // while writing merge algo need to make it dynamic b/c of the recursion
    while(i < l1.length && j < l2.length) {// Also the length of l1 and l2;
      if(l1[i] < l2[j]) {
        result[k] = l1[i];
        i++;
      } else {
        result[k] = l2[j];
        j++;
      }
      k++;
    }
    while(i < l1.length) {
      result[k] = l1[i];
      i++;
      k++;
    }
    while(j < l2.length) {
      result[k] = l2[j];
      j++;
      k++;
    }
    console.log(result);
  };
  fun(l1, l2) {
  };
};


const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

// Converted input arrays to LinkedLists
// const list1 = new Node(1);
// list1.next = new Node(2);
// list1.next.next = new Node(4);

// const list2 = new Node(1);
// list2.next = new Node(3);
// list2.next.next = new Node(4);

const mergeTwoLists = function(list1, list2) {
  const solution = new Solution();
  return solution.merge(list1, list2);    
};

mergeTwoLists(list1, list2);

// list1.printLL(mergeTwoLists(list1, list2));