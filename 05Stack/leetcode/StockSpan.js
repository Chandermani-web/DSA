// Constructor function
var StockSpanner = function() {
    this.stack = []; // store [price, span]
};

// Prototype method
StockSpanner.prototype.next = function(price) {
    let span = 1;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }

    this.stack.push([price, span]);
    return span;
};

// ----------- Usage (Outside) -----------

let stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100)); // 1
console.log(stockSpanner.next(80));  // 1
console.log(stockSpanner.next(60));  // 1
console.log(stockSpanner.next(70));  // 2
console.log(stockSpanner.next(60));  // 1
console.log(stockSpanner.next(75));  // 4
console.log(stockSpanner.next(85));  // 6