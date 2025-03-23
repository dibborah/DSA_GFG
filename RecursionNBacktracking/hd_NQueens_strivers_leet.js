// Strivers (hard)
// Leetcode (hard)

// Leetcode Q No. and name
// 51. N-Queens 
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


// Approach I (Less efficients{ without using Hashing})

// Algorithm Analysis: 
// Time : 
// Therefore, the isSafe function takes O(3n) in the worst case.3N
// The total number of recursive calls is approximately O(n!) 
// O(n^2) : Base case with deepcopy

// Overall Time complexity is : O(n!)×O(3n + n^2)= O(n^2 * n!)

// Space: 
// Board: The board is a 2D array of size n x n, so it takes O(n^2) space.
// Ans: Therefore, the space required for ans is O(n!(possible combination) * n^2(storing them))
// Overall Space Complexity: O(n! * n^2)
// Aux SC: O(N) {Deepth or height of the tree}
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
                ans.push(board.map(row => row.join(''))); // n^2
                return;
            }

            for(let row = 0; row < n; row++) { // (n * n)!
                if(this.isSafe(board, col, row, n)) { // 3N
                    board[row][col] = 'Q';
                    this.solve(ans, board, n, col + 1);
                    board[row][col] = '.';
                }
            }
        }

        solveNQueens(n) {
            let ans = []; // (N*N)
            let board = []; // N
            let s = new Array(n).fill('.'); // n
            
            // One line code to create the board
            // let board = new Array(n).fill().map(() => new Array(n).fill('.'));


            for (let i = 0; i < n; i++) {// n
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

// Algorithm analysis

// Time complexity 
// 1. For each cell (row, col), the algorithm checks if placing a queen is safe using the leftRow, upperDiagonal, and lowerDiagonal arrays. This check is O(1) because it involves simple array lookups.
// 2. The total number of recursive calls is approximately O(n!) in the worst case, as the number of valid configurations for the N-Queens problem is known to grow factorially with n.

// 3. Base case: Takes O(n^2) time (since the board is n x n).

// Overall Time Complexity: O(n!)×O(N^2) + O(1)=O(n^2 * n!)

// Space complexity: 
// 1. Board: O(N^2)
// 2. leftRow: O(N), lowerDiagonal: O(2N - 1), upperDiagonal: O(2N - 1) 
// 3. ans: O(N! * N2)

// Overall Space Complexity: O(N! * N^2)

// Aux SC(Recursion call stack): O(N)
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

        // const leftRow = new Array(n);
        // const upperDiagonal = new Array(2*n - 1);
        // const lowerDiagonal = new Array(2*n - 1);
    
        const leftRow = [];
        const upperDiagonal = [];
        const lowerDiagonal = [];

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

