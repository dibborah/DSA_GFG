// Problem statement:

// You are given a non-empty string S containing no spaces’ and a dictionary of non-empty strings (say the list of words). You are supposed to construct and return all possible sentences after adding spaces in the originally given string ‘S’, such that each word in a sentence exists in the given dictionary.

// Note :

// The same word in the dictionary can be used multiple times to make sentences.
// Assume that the dictionary does not contain duplicate words.

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

class Solution {
    fun(s, wordDict, result, sentence) {
        if (s.length === 0) {
            result.push(sentence.trim());
            return
        }

        for(let index = 0; index <= s.length; index++) {
            if(wordDict.includes(s.slice(0, index))) {
                this.fun(s.slice(index), wordDict, result, sentence + ' ' + s.slice(0, index));
            }
        }
    }

    workBreak(s, wordDict) {
        const result = [];
        this.fun(s, wordDict, result, '', 0);
        return result;
    }
}

const solution = new Solution();
// const s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"];
// const s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];

const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]; // []

console.log(solution.workBreak(s, wordDict));
