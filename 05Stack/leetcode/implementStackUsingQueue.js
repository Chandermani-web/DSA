var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

MyStack.prototype.push = function(x) {
    // Step 1: push into q2
    this.q2.push(x);

    // Step 2: move all elements from q1 → q2
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    // Step 3: swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
};

MyStack.prototype.pop = function() {
    return this.q1.shift();
};

MyStack.prototype.top = function() {
    return this.q1[0];
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};