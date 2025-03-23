// Strivers (hard)
// Leetcode (hard)

// Leetcode Q No. and name
// 51. N-Queens 
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


// Approach I (Less efficients{ without using Map})
class Solution1 {
    isSafe(board, col, row, n) {
        let dupCol = col;
        let dupRow = row;
        
        // check upper left diagonal
        while(col >= 0 && row >= 0) {
            if(board[row][col] === 'Q') return false;
            col--;
            row--
        };
        
        col = dupCol;
        row = dupRow;
        // check left side cells
        while(col >= 0) {
            if(board[row][col] === 'Q') return false;
            col--;
        }
        
        // check lower left diagonal
        col = dupCol;
        row = dupRow;
        while(col >= 0 && row < n) {
            if(board[row][col] === 'Q') return false;
            col--;
            row++;
        };

        return true;
    }

    solve(ans, board, n, col) {
        if(col === n) {
            ans.push(board.map(row => row.join('')));
            return;
        }

        for(let row = 0; row < n; row++) {
            if(this.isSafe(board, col, row, n)) {
                board[row][col] = 'Q';
                this.solve(ans, board, n, col + 1);
                board[row][col] = '.';
            }
        }
    }

    solveNQueens(n) {
        let ans = [];
        let board = [];
        let s = new Array(n).fill('.');
        
        // One line code to create the board
        // let board = new Array(n).fill().map(() => new Array(n).fill('.'));


        for (let i = 0; i < n; i++) {
            // deep copy is required
            board[i] = [...s];
        }

        this.solve(ans, board, n, 0);
        return ans;
    }
}

const solution1 = new Solution1();
const n = 4;
// const n = 1;
// const n = 2;
// const n = 3;


// Optimal approach (Approach II)
// Using hashing
class Solution2 {
    solve(ans, board, n, col, leftRow, upperDiagonal, lowerDiagonal) {
        if(col === n) {
            ans.push(board.map(row => row.join('')));
            return;
        }

        for(let row = 0; row < n; row++) {
            if(!leftRow[row] && !lowerDiagonal[row + col] && !upperDiagonal[(n - 1) + (col - row)]) {
                board[row][col] = 'Q';
                leftRow[row] = 1;
                lowerDiagonal[row + col] = 1;
                // Formula
                upperDiagonal[(n - 1) + (col - row)] = 1;
    
                this.solve(ans, board, n, col + 1, leftRow, upperDiagonal, lowerDiagonal);
                board[row][col] = '.';
                leftRow[row] = 0;
                lowerDiagonal[row + col] = 0;
                // Formula
                upperDiagonal[(n - 1) + (col - row)] = 0;
            }
        }
    }

    solveNQueens(n) {
        let ans = [];
        let board = [];
        // One line code to create the board
        // let board = new Array(n).fill().map(() => new Array(n).fill('.'));

        let s = new Array(n).fill('.');

        const leftRow = new Array(n);
        const upperDiagonal = new Array(2*n - 1);
        const lowerDiagonal = new Array(2*n - 1);
        


        for (let i = 0; i < n; i++) {
            // deep copy is required
            board[i] = [...s];
        }

        this.solve(ans, board, n, 0, leftRow, upperDiagonal, lowerDiagonal);
        return ans;
    }
}

const solution2 = new Solution2();
const n2 = 4;
// const n = 1;
// const n = 2;
// const n = 3;
console.log(solution2.solveNQueens(n2));

