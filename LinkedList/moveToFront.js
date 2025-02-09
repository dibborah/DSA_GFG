
// User function Template for javascript
/**
 * Definition for singly Link List Node
 * class Node{
 *     constructor(x){
 *         this.data = x
 *         this.next = null
 *     }
 * }
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    // Function to move last element to front in a linked list.
    moveToFront(head) {
      let prev = null
      let curr = head;
      while(curr.next !== null) {
        prev = curr;
        curr = curr.next;
      };
  
      if(prev === null)
        return curr;
  
      prev.next = null;
      curr.next = head;
      return curr;
    };
  };
  
  
const solution = new Solution();
if (!head) return head;
const newHead = solution.moveToFront(head);
// check the result in the practiceBasic.js file  