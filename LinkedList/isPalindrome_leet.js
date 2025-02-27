// Problem Statement: 
// Leetcode problem: 

// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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

class Solution {
  reverseLL(head) {
    let prev = null;
    let curr = head;
    while(curr !== null) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    };
    return prev;
  };
  fun(list1) {
    let length = 0;
    let curr = list1;
    while(curr !== null) {
        length++;
        curr = curr.next;
    };
    // This is fine but need to find mid using fast and slow pointer approach
    let mid = (length & 1) === 0
      ? (Math.floor((length / 2)) - 1) : Math.floor(length / 2);
    let pos = 0;
    let curr2 = list1;
    while(pos < mid) {
      pos++; 
      curr2 = curr2.next;
    };

    const list2 = curr2.next;
    curr2.next = null;

    let newHead = this.reverseLL(list2);
    while(list1 !== null && newHead !== null) {
        if(list1.val !== newHead.val) {
            return false;            
        }
        list1 = list1.next;
        newHead = newHead.next;
    }
    return true;
  };
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
};

// Input: head = [1,2,2,1]const
// Output: true

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(2);
list.next.next.next = new Node(1);
list.next.next.next = new Node(5);

const isPalindrome = function(head) {
  const solution = new Solution();
  return solution.fun(head);
};

console.log(isPalindrome(list));