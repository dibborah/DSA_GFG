class Graph {
    constructor(numVertices) {
        this.numbVertices = numVertices;

        // for adjMatrix
        this.adjMatrix = [];
        for(let i = 0; i < this.numbVertices; i++) {
             this.adjMatrix[i] = []
            // row 0
            for(let j = 0; j < this.numbVertices; j++) {
                // row 0 col 0
                this.adjMatrix[i][j] = 0;
            };
        };

        // for adjList
        this.adjList = new Map();
    };

    // for adjList
    addVertex(v) {
        if(!this.adjList.has(v)) {
            this.adjList.set(v, []);
        };
    };

    // for adjList
    addEdge(source, dest) {
        if (this.adjList.has(source) && this.adjList.has(dest)) {
            this.adjList.get(source).push(dest);
            this.adjList.get(dest).push(source);
        };
    };

    addAllVertex(v) {
        for(let i = 0; i < v; i++){
            this.addVertex(i);
        };
    };

    printAdjList() {
        for(const [key, vertex] of this.adjList) {
            console.log(`${key}: ${vertex}`);
        };
    };

    // for adjMatrix
    // addEdge(source, dest) {
    //     // UnDirected Graph
    //     // this.adjMatrix[i][j] = 1;
    //     // this.adjMatrix[j][i] = 1;

    //     // Directed Graph
    //     // if(source >= 0 && source < this.numbVertices
    //     //     && dest >= 0 && dest < this.numbVertices
    //     // ) {
    //     //     this.adjMatrix[source][dest] = 1;
    //     // };

    //     // UnDirected Graph
    //     // if(source >= 0 && source < this.numbVertices
    //     //     && dest >= 0 && dest < this.numbVertices
    //     // ) {
    //     //     this.adjMatrix[source][dest] = 1;
    //     //     this.adjMatrix[dest][source] = 1;
    //     // };
    // };

    // for adjMatrix
    // addEdge(i, j) {
    //   this.adjMatrix[i][j] = 1;
    //   this.adjMatrix[j][i] = 1;
    // };

    // for adjMatrix
    printMatrix() {
        for(let i = 0; i < this.numbVertices; i++) {

            // const connections = this.adjMatrix[i].map((vertex, index) => {
            //     if(vertex === 1) {
            //         return index;
            //     };
            // }).filter(item => item !== undefined);
            // console.log(`${i} => ${connections.join(' ')}`)

            const connections = this.adjMatrix[i].join(' ');
            console.log(`${i} => ${connections}`);
        };
    };
};

// const myGraph = new Graph(5);

// for adjMatrix
// myGraph.addEdge(0,2);
// myGraph.addEdge(2,3);
// myGraph.addEdge(0,3);
// myGraph.addEdge(4,3);
// myGraph.addEdge(1,4);
// myGraph.addEdge(1,2);
// console.log(myGraph.adjMatrix);
// myGraph.printMatrix();

// for adjList

const myGraph = new Graph(5);

myGraph.addAllVertex(5);

myGraph.addEdge(0,2);
myGraph.addEdge(2,3);
myGraph.addEdge(0,3);
myGraph.addEdge(4,3);
myGraph.addEdge(1,4);
myGraph.addEdge(1,2);

// console.log(myGraph.adjList);

myGraph.printAdjList();



// -----5----->

//         0  1 2 3 4
// |     0 - - - - - 
// |     1 - - - - - 
// |     2 - - - - - 
// 5     3 - - - - - 
// |     4 - - - - - 


// 5 * 5