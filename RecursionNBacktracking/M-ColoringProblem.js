// You are given an undirected graph consisting of v vertices and a list of edges, along with an integer m. Your task is to determine whether it is possible to color the graph using at most m different colors such that no two adjacent vertices share the same color. Return true if the graph can be colored with at most m colors, otherwise return false.

// Note: The graph is indexed with 0-based indexing.

// Graph is the prerequisite to this problem

// Learn this problem when Graph topic is reached.
// At list adjacent list and method to create graph should be done and known.

// TC: {Keeping aside the complexities}: N(Nodes) I am trying M color: O(N^M).
// SC: O(Nodes) {depth of recursion} + O(N){color array to color it} : O(2N). 

function isSafe(node, G, color, col) {
    for (const neighbor of G[node]) {
        if (color[neighbor] === col) {
            return false;
        }
    }
    return true;
}

function solve(node, G, color, n, m) {
    if (node === n) return true;
    
    for (let i = 1; i <= m; i++) {
        if (isSafe(node, G, color, i)) {
            color[node] = i;
            if (solve(node + 1, G, color, n, m)) {
                return true;
            }
            color[node] = 0; // backtrack
        }
    }
    return false;
}

function graphColoring(G, m) {
    const n = G.length;
    const color = new Array(n).fill(0); // Initialize all colors as 0 (uncolored)
    return solve(0, G, color, n, m);
}

// Helper function to create adjacency list from number of vertices and edges
function createGraph(v, edges) {
    const G = new Array(v);
    for (let i = 0; i < v; i++) {
        G[i] = [];
    }
    for (const [u, v] of edges) {
        G[u].push(v);
        G[v].push(u); // undirected graph
    }
    return G;
}

// Example usage:
const v = 4;
const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]];
const m = 3;
const graph = createGraph(v, edges);
console.log(graphColoring(graph, m)); // Output: true