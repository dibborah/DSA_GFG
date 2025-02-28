// Strivers + GFG(Plat) + Leetcode
// Solve using two pointer: Fast and slow approach

// Kth from End of Linked List

// Given the head of a linked list and the number k, Your task is to find the kth node from the end. If k is more than the number of nodes, then the output should be -1.

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.next = new Node(7);
list.next.next.next.next.next.next.next = new Node(8);
list.next.next.next.next.next.next.next.next = new Node(9);

class Solution {
  printLL(head) {
    if(head === undefined){
      console.log('Head does not exist');
      return;
    }
    let newNode = head;
    let ll = '';
    while(newNode !== null) {
      ll += newNode.data + ' -> '
      newNode = newNode.next;
    }
    console.log(ll.slice(0, -4));
  };
  getKthFromLast(head, k) {
    let slow = head;
    let fast = head;
    let count = 0;
    while(fast !== null && count < k) {
      fast = fast.next;
      count++;
    };
    while(fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    if(k > count) {
      return -1;
    }
    return slow.data;
  };
};

const solution = new Solution();
solution.printLL(list);
const res = solution.getKthFromLast(list, 89);
console.log(res);
