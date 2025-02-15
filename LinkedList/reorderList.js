/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    };
  };
  
  class Solution {
    printLL(head) {
      if(head === undefined){
        console.log('Head does not exist');
        return;
      }
      let newNode = head;
      let ll = '';
      while(newNode !== null) {
        ll += newNode.val + ' -> '
        newNode = newNode.next;
      }
      console.log(ll.slice(0, -4));
    };
    zigZagmerge(head1, head2) {
      const dummyNode = new Node(-1);
      let temp = dummyNode;
      let c1 = head1;
      let c2 = head2;
      while((c1 !== null) && (c2 !== null)) {
        // append c1
        temp.next = c1;
        temp = c1;
        c1 = c1.next;
        temp.next = null;
        // append c2
        temp.next = c2;
        temp = c2;
        c2 = c2.next;
        temp.next = null;
      };
      if(c1 === null) {
          temp.next = c2;
      } else {
          temp.next = c1;
      }
      return dummyNode.next;
    };
    reverseLL(head){
      let prev = null;
      let curr = head;
      while(curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr
        curr = nextNode;
      };
      return prev;
    };  
    findMiddle(head) {
      let slow = head;
      let fast = head;
      while(fast.next !== null && fast.next.next !== null) {
         slow = slow.next;
         fast = fast.next.next;
      };
      return slow;
    };
  };
  
var reorderList = function(list) {
  const solution = new Solution();
  const mid = solution.findMiddle(list);
  const h2 = mid.next;
  mid.next = null;
  const newh2 = solution.reverseLL(h2);
  solution.zigZagmerge(list, newh2);
};

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

const solution = new Solution();

solution.printLL(list);
reorderList(list);
solution.printLL(list);

// 12GB 1 billion
// 125 Billion
// 1250