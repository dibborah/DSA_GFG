// Strivers
// Leetcode

// Leetcode QNo. and Name
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.


// Algorithm analysis

// Time complexity: 
// 1. isValid(board, row, col, c)
// Each check loops over a constant size (9), since a Sudoku board is a fixed size of 9x9. So, this function runs in O(9) = O(1) time.

// 2. solveSudoku():
// The outer two loops in solveSudoku(board) iterate over all the cells in the board. Since the board is a fixed size (9x9), this takes O(81) iteration

// Thus, the time complexity of the algorithm is exponential in the worst case. Specifically, in the worst case:

// There are 81 empty cells.
// For each empty cell, the algorithm tries 9 possible values.
// In the worst case, it would need to try all combinations, leading to a time complexity of O(9^81).

// Summary
// TC: O(9 ^ 81). But this is hypothetical as input board will have very few empty cells: Almost O(1)
// Space Complexity: The space complexity is O(1) since the board size is fixed at 9x9 and the recursion depth is at most 81.



class Solution1 {
    isValid(board, row, col, c) {
        for (let i = 0; i < 9; i++) { // O(1)
            // Always going to fun 9 time since a sudoku is 9 * 9
            if (board[row][i] === c) return false;
            if (board[i][col] === c) return false;
            if (board[3 * Math.floor(row/3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === c) return false; 
        }
        return true;
    }

    solveSudoku(board) {
        for(let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {

                if(board[i][j] === '.') {

                    for(let c = 1; c <= 9; c++) {
                        let char = c + '';
                        if(this.isValid(board, i , j, char)) {
                            board[i][j] = char;
                            if(this.solveSudoku(board) === true) {
                                return true;                                
                            } else {
                                board[i][j] = '.';
                            }
                        }
                    }
                
                    return false;
                }

            }
        }
        return true;
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
console.log(board[0]);

