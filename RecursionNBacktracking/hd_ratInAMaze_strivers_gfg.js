// strivers
// gfg

// Companies: Amazon & Microsoft

// gfg Q name
// Rat in a Maze Problem - I

// Consider a rat placed at position (0, 0) in an n x n square matrix mat. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:

// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Note: In a path, no cell can be vis more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list.+

// The task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.

// Return the final result vector in lexicographically smallest order.

// Input: mat[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]


// Need to understand the time complexity how it became 4^ (n * m)
// TC: 4^(m * n)
// Aux Recursion call stack SC: O(m * n)

// Approach I of Rat in a maze
// Here I have run n seperate if conditions to move to n different direction
// Less optimized

// Time complexity 
// 1. Maximum Path Length: O(n²)
// 2. Total Paths: 4^{n²} 
// 3. Tight Upper Bound: O(3^{n²}) (accounts for backtracking and visited checks).

// Space complexity:
// 1.Recursion Stack Depth: O(n²)
// 2. Visited Matrix: O(n²)
// 3. Result Storage: O(k * n²)
// Final SC: O(n² + k * n²) 

// class Solution {
//   solve(i, j, mat, n, result, path, vis) {
//     if(i ===  n - 1 && j === n - 1) {
//       result.push(path);
//       return;
//     }

//     // Down
//    if ((i < n - 1) && (mat[i + 1][j] === 1) && !vis[i + 1][j]) {
//      vis[i + 1][j] = 1;           
//      this.solve(i + 1, j, mat, n, result, path + 'D', vis);
//      vis[i + 1][j] = 0;           
//     }

//     // Left
//     if ((j > 0) && (mat[i][j - 1] === 1) && !vis[i][j - 1]) {
//       vis[i][j - 1] = 1;           
//       this.solve(i, j - 1, mat, n, result, path + 'L', vis);
//       vis[i][j - 1] = 0;       
//     }

//     // Rigth
//     if ((j < n - 1) && (mat[i][j + 1] === 1) && !vis[i][j + 1]) {
//       vis[i][j + 1] = 1;           
//       this.solve(i, j + 1, mat, n, result, path + 'R', vis);
//       vis[i][j + 1] = 0;       
//     }

//     // Up
//     if ((i > 0) && (mat[i - 1][j] === 1) && !vis[i - 1][j]) {
//       vis[i - 1][j] = 1;           
//       this.solve(i - 1, j, mat, n, result, path + 'U', vis);
//       vis[i - 1][j] = 0;       
//     }

//   }

//   ratInAMaze(mat) {
//     const result = [];
//     const vis = [];

//     for(let i = 0; i < mat.length; i++) {
//       vis[i] = [];
//     }

//     vis[0][0] = 1;
//     (mat[0][0] === 1) && this.solve(0, 0, mat, mat.length, result, '', vis);
//       console.log('vis', vis[4][0]);
//     return result;
//   }
// };

// Optimzed
// Approach II of rat in a maze
// Here we won't have n seperate if conditions to move to n different direction
//  This 2nd approach is more cleaner but not faster than the one before
// The time and space complexity here is same
class Solution {
  solve(i, j, mat, n, result, path, vis, di, dj) {
    if(i ===  n - 1 && j === n - 1) {
      result.push(path);
      return;
    }

    const dir = 'DLRU';
    for(let index = 0; index < 4; index++) {
      const nexti = i + di[index];
      const nextj = j + dj[index];
      if(nexti >= 0 && nextj >=0 && nexti < n && nextj < n && mat[nexti][nextj] === 1 && !vis[nexti][nextj]) {
        vis[nexti][nextj] = 1;
        this.solve(nexti, nextj, mat, n, result, path + dir.charAt(index), vis, di, dj);
        vis[nexti][nextj] = 0;
      }
    }
  }

  ratInAMaze(mat) {
    const result = [];
    const vis = [];

    for(let i = 0; i < mat.length; i++) {
      vis[i] = [];
    }

    const di = [1, 0, 0, -1];
    const dj = [0, -1, 1, 0];

    vis[0][0] = 1;
    (mat[0][0] === 1) && this.solve(0, 0, mat, mat.length, result, '', vis, di, dj);
    return result;
  }
};

// Along with String char of Direction I also have to to pass the ways D|L|R|U

// const mat = [
//   [1, 0, 0, 0],
//   [1, 1, 0, 1],
//   [1, 1, 0, 0],
//   [0, 1, 1, 1],
// ];

const mat = [
  [1,1,1,0,1],
  [1,0,1,1,1],
  [0,0,1,1,1],
  [1,0,0,1,1],
  [1,0,0,0,1]
];

// Its correct output: RRDDRDRD RRDDRRDD RRDDRURDDD RRDRDDRD RRDRDRDD RRDRRDDD RRDRRDLDRD
// My output: 
// 'DURRDDRDRD',   'DURRDDRRDD',
// 'DURRDDRURDDD', 'DURRDRDDRD',
// 'DURRDRDRDD',   'DURRDRRDDD',
// 'DURRDRRDLDRD', 'RRDDRDRD',
// 'RRDDRRDD',     'RRDDRURDDD',
// 'RRDRDDRD',     'RRDRDRDD',
// 'RRDRRDDD',     'RRDRRDLDRD,

const solution = new Solution();
console.log(solution.ratInAMaze(mat));

