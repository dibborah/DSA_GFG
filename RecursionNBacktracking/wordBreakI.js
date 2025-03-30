// I will solve it when DP / memorization or greedy is done
class Solution {
    constructor() {
        this.result = false;
    }

    fun(s, wordSet, startPos) {
        if (startPos === s.length) {
            this.result = true;
            return true;
        }

        for(let endPos = startPos + 1; endPos <= s.length; endPos++) {
            let word = s.substring(startPos, endPos)
            if(wordSet.has(word)) {
                this.fun(s, wordSet, endPos);
                if(this.result) {// early prunning
                    return;
                }
            }
        }
    }

    workBreakI(s, wordDict) {
        const wordSet = new Set(wordDict);
        this.fun(s, wordSet, 0);
        return this.result;
    }
}

// const s = "leetcode", wordDict = ["leet","code"];
// const s = "applepenapple", wordDict = ["apple","pen"];

// const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];

const s = "aaaaaaa", wordDict = ["aaaa","aaa"];

const solution = new Solution();
console.log(solution.workBreakI(s, wordDict));