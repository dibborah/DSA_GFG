class Solution2 {
    solve(ans, board, n, col, leftRow, upperDiagonal, lowerDiagonal) {
        if (col === n) {
            ans.push(board.map(row => row.join('')));
            return;
        }

        for (let row = 0; row < n; row++) {
            if (!leftRow[row] && !lowerDiagonal[row + col] && !upperDiagonal[(n - 1) + (col - row)]) {
                board[row][col] = 'Q';
                leftRow[row] = 1;
                lowerDiagonal[row + col] = 1;
                upperDiagonal[(n - 1) + (col - row)] = 1;

                this.solve(ans, board, n, col + 1, leftRow, upperDiagonal, lowerDiagonal);

                // Backtrack
                board[row][col] = '.';
                leftRow[row] = 0;
                lowerDiagonal[row + col] = 0;
                upperDiagonal[(n - 1) + (col - row)] = 0;
            }
        }
    }

    solveNQueens(n) {
        let ans = [];
        let board = new Array(n).fill().map(() => new Array(n).fill('.')); // Initialize board with '.' 

        // Initialize helper arrays
        const leftRow = new Array(n).fill(0); // Tracks occupied rows
        const upperDiagonal = new Array(2 * n - 1).fill(0); // Tracks occupied upper diagonals
        const lowerDiagonal = new Array(2 * n - 1).fill(0); // Tracks occupied lower diagonals

        this.solve(ans, board, n, 0, leftRow, upperDiagonal, lowerDiagonal);
        return ans;
    }
}

// Example usage:
const solution = new Solution2();
console.log(solution.solveNQueens(4));