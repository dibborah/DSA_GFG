// Strivers (hard)
// Leetcode (hard)

// Leetcode Q No. and name
// 51. N-Queens 
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


// Approach I (Less efficients{ without using Map})
class Solution {
    solveNQueens(n) {
        let ans = [];
        let board = [];
        let s = '.'.repeat(n);

        for(let i = 0; i < n; i++) {
            board[i] = s;
        }
    }
}

const solution = new Solution();
console.log(solution.solveNQueens(4));