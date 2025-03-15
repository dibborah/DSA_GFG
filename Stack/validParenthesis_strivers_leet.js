// Strivers
// LeetCode problem number and name
// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type

/**
 * @param {string} s
 * @return {boolean}
 */


class MyStack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    print() {
      console.log(this.items.join(' '));
    }
}

// TC: O(N);
// SC: O(N);

// The SC: cannot be more optimized since in order to match and check we need to store and keep the open brackts somewhere
// TC: (Need to double verify this statement by GPT): Also cannot be optimized since to match we need to iterate the characters in the string
class Solution{
  fun(s) {
    const stack = new MyStack();
    for(let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        if(ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else{
            if(stack.isEmpty()) return false;
            if(
              (ch === ')' && stack.peek() === '(')
              || (ch === '}' && stack.peek() === '{')
              || (ch === ']' && stack.peek() === '[')
            ) {
                stack.pop();
            }else {
                return false;
            };
        };
    };
    return stack.isEmpty();
  };
};

let isValid = function(s) {
  const solution = new Solution();
  return solution.fun(s);
};

// const s = "()";
// const s = "()[]{}"
// const s  = "([])";
// const s = "(]"
// const s = '(';
// const s = '}}}';

console.log(isValid(s));
