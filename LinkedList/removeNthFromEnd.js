class Node {
  constructor(data) {
    this.data = data;
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
          ll += newNode.data + ' -> '
          newNode = newNode.next;
        }
        console.log(ll.slice(0, -4));
      };
    reverse(head) {
      let prev = null;
      let curr = head;
      while(curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      };
      return prev;
    };
    getKthFromLast(head, k) {
      const h2 = this.reverse(head);
      let count = 1;
      const dummyNode = new Node(-1);
      dummyNode.next = h2;
      let prev = null;
      let curr = h2;
      while(curr !== null && count < k) {
        prev = curr;
        curr = curr.next;
        count++
      };
      if(prev !== null) {
        // Based on the constraints on the problem's description this extra condition can be skipped
        // if (curr === null) {
        //     prev.next = null;
        // }else {
        //     prev.next = curr.next;
        // }
        prev.next = curr.next;
      } else {
        prev = curr.next;
        return prev;
      };
      return dummyNode.next;
    };
};


const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
// list.next.next.next.next.next = new Node(6);
// list.next.next.next.next.next.next = new Node(7);
// list.next.next.next.next.next.next.next = new Node(8);
// list.next.next.next.next.next.next.next.next = new Node(9);

const solution = new Solution();

solution.printLL(list);
const h2 = solution.getKthFromLast(list, 6);
solution.printLL(h2);
const res = solution.reverse(h2);
solution.printLL(res);
