

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

list1.printLL(head1);
list2.printLL(head2);

class Solution {
  sortedMerge(head1, head2) {
    let dummyNode = new Node(-1);
    let temp = dummyNode;
    let c1 = head1;
    let c2 = head2;
    while(c1 !== null && c2 !== null ) {
      if(c1.val < c2.val) {
        temp.next = c1;
        temp = c1;
        c1 = c1.next;
        temp.next = null;      
      }else{
        // curr2.val < curr1.val
        temp.next = c2;
        temp = c2;
        c2 = c2.next;
        temp.next = null;
      }
    }
    if(c2 === null) {
      temp.next = c1;
    }else {
      temp.next = c2;
    };
    return dummyNode.next;
  };
};

const solution = new Solution();
const sortedHead = solution.sortedMerge(head1, head2);
list1.printLL(sortedHead)
// check the result in the practiceBasic.js file  