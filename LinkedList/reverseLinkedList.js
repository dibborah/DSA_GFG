
class Solution {
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
  
  };
  
  const solution = new Solution();
  const newHead = solution.reverseLL(head1);
  list1.printLL(newHead);
  // check the result in the practiceBasic.js file    