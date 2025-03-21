// strivers
// leetcode

// leetcode question no. and name:
// 131. Palindrome Partitioning 

// Problem statement: 
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// TC: 2^N * K * K
// SC: x
// Aux SC: O(N)

class Solution {
    isPalindrom(s) {
        let i = 0;
        let j = s.length - 1;
        while(i < j) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false;
            };
            i++;
            j--;
        };
        return true;
    };

    fun (s, n, result, temp, k) {
        if (k === n) {
            result.push([...temp]);
            return;
        };

        for (let i = k; i < n; i++) {
            if (this.isPalindrom(s.substring(k, i + 1))) {
                temp.push(s.substring(k, i + 1));
                this.fun(s, n, result, temp, i + 1);
                temp.pop();
            };
        };
    };

    partition(s) {
        const result = [];
        this.fun(s, s.length, result, [], 0);
        return result;
    };
};

const s = "aab";
const solution = new Solution();
console.log(solution.partition(s));