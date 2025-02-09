
class Solution {
    // Function to remove duplicates from sorted linked list.
    removeDuplicates(head) {
      let prev = head;
      let curr = head.next;
      while(curr !== null) {
        if(prev.val !== curr.val) {
          prev = curr;
          curr = curr.next;
        }else {
          curr = curr.next;
          prev.next = curr;
        };
      };
      return head;
    };
  };
  
  
  const solution = new Solution();
  const newHead = solution.removeDuplicates(head);
  // check the result in the practiceBasic.js file  