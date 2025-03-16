// Strivers
// Nearest Smaller Element

// Next smaller element

// Asked In: Amazon and Microsoft
// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// More formally,

//     G[i] for an element A[i] = an element A[j] such that 
//     j is maximum possible AND 
//     j < i AND
//     A[j] < A[i]
// Elements for which no smaller element exist, consider next smaller element as -1.

module.exports = { 
    //param A : array of integers
    //return a array of integers
       prevSmaller : function(A){
         const n = A.length;
         const stack = [];
         const result = [];
         
         for (let i = 0; i < n; i++) {
           while (stack.length !== 0 && stack[stack.length - 1] >= A[i]) {
             stack.pop();
           };
           if (stack.length === 0) {
             result[i] = -1;
           } else {
             result[i] = stack[stack.length - 1];
           };
           stack.push(A[i]);		  
         };
         return result;
       }
   };