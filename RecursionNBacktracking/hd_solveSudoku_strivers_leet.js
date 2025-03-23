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
    isValid(board, row, col, c) {
        for (let i = 0; i < 9; i++) {
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

