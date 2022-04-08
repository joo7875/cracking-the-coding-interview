class stack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.stack3 = [];
    }

    push(id, val) {
        switch (id) {
            case 1: this.stack1.push(val); break;
            case 2: this.stack2.push(val); break;
            case 3: this.stack3.push(val); break;
        }
    }

    pop(id) {
        switch (id) {
            case 1: if (!this.isEmpty(1)) this.stack1.pop(); break;
            case 2: if (!this.isEmpty(2)) this.stack2.pop(); break;
            case 3: if (!this.isEmpty(3)) this.stack3.pop(); break;
        }
    }

    isEmpty(id) {
        switch (id) {
            case 1: return this.stack1.length === 0;
            case 2: return this.stack2.length === 0;
            case 3: return this.stack3.length === 0;
        }
    }

    peek(id) {
        switch (id) {
            case 1: if (!this.isEmpty(1)) return this.stack1[this.stack1.length - 1];
            case 2: if (!this.isEmpty(2)) return this.stack2[this.stack2.length - 1];
            case 3: if (!this.isEmpty(3)) return this.stack3[this.stack3.length - 1];
        }
    }
}

let arr = new stack();

arr.push(1, 2);
arr.push(1, 4);
arr.push(1, 5);
arr.push(1, 7);

arr.pop(1);
console.log(arr.peek(1));
console.log(arr.isEmpty(1));

arr.push(2, 8);
arr.push(2, 1);
arr.push(2, 2);
arr.push(2, 6);
arr.push(2, 0);

arr.pop(2);
arr.pop(2);
console.log(arr.peek(2));
console.log(arr.isEmpty(2));

arr.push(3, 9);
arr.push(3, 5);

arr.pop(3);
arr.pop(3);
console.log(arr.peek(3));
console.log(arr.isEmpty(3));

console.log(arr);

// TC

// push: O(1)
// pop: O(1)
// peek: O(1)