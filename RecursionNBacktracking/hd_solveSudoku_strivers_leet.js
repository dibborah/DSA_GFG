// Strivers
// Leetcode

// Leetcode QNo. and Name
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.


class Solution1 {
    isSafe(board, row, col, val) {
        let dupRow = row;

        while(row >= 0) {
            if(board[row][col] === val) return false;
            row--;
        }

        row = dupRow;
        while(col >= 0) {
            if(board[row][col] === val) return false;
            col--;
        }

        return true;
    }

    fun(board, n, col, row) {
        // base case
        if(board[col][row] !== '.') {
            return;
        }

        // base case ?
        // How to update the val to different values starting from 1-9

        for(let row = 0; row < n; row++) {
            if(board[row][col] === '.' && this.isSafe(board, row, col, col + 1 + '')) {
                board[row][col] = col + 1 + '';
                this.fun(board, n, col + 1, row);
                board[row][col] = '.';
            }
        }
    }

    solveSudoku(board) {
        this.fun(board, 9, 0)
    }
}

const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

const solution = new Solution1();
solution.solveSudoku(board);
console.log(board);

