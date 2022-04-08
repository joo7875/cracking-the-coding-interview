class MyQueue {
    constructor() {
        this.queue = [];
    }

    add(val) {
        this.queue.push(val);
    }

    remove() {
        if (!this.isEmpty()) this.queue.shift();
    }

    peek() {
        if (!this.isEmpty()) return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

let arr = new MyQueue();

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

arr.remove();
arr.remove();

console.log(arr.peek());
console.log(arr.isEmpty());

console.log(arr);