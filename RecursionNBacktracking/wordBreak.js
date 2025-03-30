// Problem statement:

// You are given a non-empty string S containing no spaces’ and a dictionary of non-empty strings (say the list of words). You are supposed to construct and return all possible sentences after adding spaces in the originally given string ‘S’, such that each word in a sentence exists in the given dictionary.

// Note :

// The same word in the dictionary can be used multiple times to make sentences.
// Assume that the dictionary does not contain duplicate words.

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]


// Time Complexity:
// Consider s = "aaaaa" and wordDict = ["a", "aa", "aaa", ...].
// This creates an exponential number of recursive calls (binary decisions at each step)
// TC: O(2^N) 
// Includes is used to compare: o(N)
// Total TC: O(2^N * N) 

// SC: 
// 1. Recursion call stack : O(N^2) , slice method 

// 1. String Slices Creating O(n²) Space
// Initial call: "abcde"
// - Takes slice(1) → "bcde" (new string)
//   - Takes slice(1) → "cde" (new string)
//     - Takes slice(1) → "de" (new string)
//       - Takes slice(1) → "e" (new string)
//         - Takes slice(1) → "" (new string)
// Total memory = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2 → O(n²)

// 2. Result Storage Being O(2ⁿ) (Output Space)
// Visualization for s = "abc":
// All possible splits:
// 1. "a b c"
// 2. "a bc"
// 3. "ab c"
// 4. "abc" (if in dict)
// TC: 2^(n-1)
// For n=3, up to 4 (2²) 

// class Solution1 {
//     fun(s, wordDict, result, sentence) {
//         if (s.length === 0) {
//             result.push(sentence.trim());
//             return;
//         }
//         for(let index = 0; index <= s.length; index++) { // n
//             if(wordDict.includes(s.slice(0, index))) { // m
//                 this.fun(s.slice(index), wordDict, result, sentence + ' ' + s.slice(0, index));
//             }
//         }
//     }

//     workBreak(s, wordDict) {
//         const result = [];
//         this.fun(s, wordDict, result, '', 0);
//         return result;
//     }
// }

// Optimized approach
// includes is taking O(m) time everytime
// Also slice takes O(n) time evertime

// Without using .includes and slicing the result

class Solution2 {
    fun(s, wordSet, result, sentence, startPos) {
        if (startPos === s.length) {
            result.push(sentence.trim());
            return;
        }
        for(let endPos = startPos + 1; endPos <= s.length; endPos++) {
            let word= s.substring(startPos, endPos)
            if(wordSet.has(word)) {
                this.fun(s, wordSet, result, sentence + ' ' + word, endPos);
            }
        }
    }

    workBreak(s, wordDict) {
        const result = [];
        const wordSet = new Set(wordDict);
        this.fun(s, wordSet, result, '', 0);
        return result;
    }
}

const solution = new Solution2();

// const s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"];
const s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];

// Empty output array
// const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]; // []

console.log(solution.workBreak(s, wordDict));
