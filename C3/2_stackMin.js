class stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        if (!this.isEmpty()) this.stack.pop();
    }

    min() {
        if (!this.isEmpty()) return Math.min(...this.stack);
    }

    isEmpty() {
        return this.stack.length === 0 ? true : false;
    }
}

let arr = new stack();

arr.push(10);
arr.push(5);
arr.push(9);
arr.push(35);
arr.push(22);
arr.push(16);

console.log(arr.min())