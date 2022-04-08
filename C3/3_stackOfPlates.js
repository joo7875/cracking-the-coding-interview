class setOfStacks {

    constructor() {
        this.capacity = 5;
        this.count = 0;
        this.stack = [[]];
    }

    push(val) {
        if (this.isFull()) this.addStack(); 
        this.stack[this.count].push(val);
    }

    pop() {
        if (this.isEmpty()) this.count -= 1;
        this.stack[this.count].pop();
    }

    popAt(index) {
        if (index >= 0 && !this.isEmptyAt(index)) this.stack[index].pop();
    }

    isFull() {
        return this.stack[this.count].length === this.capacity;
    }

    isEmpty() {
        return this.stack[this.count].length === 0;
    }

    isEmptyAt(index) {
        return this.stack[index].length === 0;
    }

    addStack() {
        this.stack.push([]);
        this.count += 1;
    }
}

let arr = new setOfStacks();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

arr.push(11);
arr.push(12);

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

arr.popAt(1);
arr.pop();
arr.pop();
arr.pop();

console.log(arr);