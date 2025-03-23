class Solution1 {
    isValid(board, row, col, c) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === c) return false; // Check row
            if (board[i][col] === c) return false; // Check column
            // Check 3x3 subgrid
            if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === c) return false;
        }
        return true;
    }

    solveSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {

                if (board[i][j] === '.') {

                    for (let c = 1; c <= 9; c++) { // Iterate over numbers 1 to 9
                        const char = c.toString(); // Convert number to string
                        if (this.isValid(board, i, j, char)) {
                            board[i][j] = char; // Place the character
                            if (this.solveSudoku(board)) {
                                return true; // If solved, return true
                            } else {
                                board[i][j] = '.'; // Backtrack
                            }
                        }
                    }
                    return false; // If no valid number is found, return false
                }
            }
        }
        return true; // If the board is filled, return true
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
