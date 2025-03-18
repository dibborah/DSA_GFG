// strivers
// Leetcode
// gfg

// Leetcode question no. and name
// 901. Online Stock Span

// Problem statement:

// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.

// In summary: 
// Maximum consecutive days the stock price was less than or equal to current day

// ----------------------------------------


// My Solution 

// Approach 1 
// Brute force

// TC for the next function : O(no. of days from now)
// SC: Total number of next calls from now.

class Solution1 {
    constructor () {
        this.stocks = [];
    };

    fun (x) {
        let stock_span = 1;
        for(let i = this.stocks.length - 1; i >= 0; i--) {
            if(x >= this.stocks[i]) {
                stock_span++;
                continue;
            };
            break;
        };
        this.stocks.push(x);
        return stock_span;
    };
};

const solution1 = new Solution1();

console.log(solution1.fun(100));
console.log(solution1.fun(80));
console.log(solution1.fun(60));
console.log(solution1.fun(70));

console.log(solution1.fun(60));
console.log(solution1.fun(75));
console.log(solution1.fun(85));

// --------------------------------------

// Brute force
// Leetcode boiler_plate code Solution

var StockSpanner1 = function() {
    this.stocks = [];    
};

/** 
 * @param {number} price
 * @return {number}
 */

StockSpanner1.prototype.next = function(price) {
    let stock_span = 1;
    for (let i = this.stocks.length - 1; i >= 0; i--) {
        if (price >= this.stocks[i]) {
            stock_span++;
            // continue;
        } else {
            break;
        }
    };
    this.stocks.push(price);
    return stock_span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner1()
 * var param_1 = obj.next(price)
 */

// ---------------------------------------------

// Optimized approach

class Solution2 {
    constructor() {
        this.stack = [];
        this.index = -1;
    };

    stockSpanner() {
        this.index = -1;
        this.stack.pop();
    };

    fun(x) {
        this.index++;
        let ans;

        while(this.stack.length !== 0 && this.stack.at(-1).val <= x) {
            this.stack.pop();
        };

        
        ans =  this.index - (this.stack.length === 0 ? -1 : this.stack.at(-1).idx);

        this.stack.push({ val: x, idx: this.index });
        return ans;
    };
};

const solution2 = new Solution2();

console.log(solution2.fun(7));
console.log(solution2.fun(2));
console.log(solution2.fun(1));
console.log(solution2.fun(3));
console.log(solution2.fun(3));
console.log(solution2.fun(1));
console.log(solution2.fun(8));
