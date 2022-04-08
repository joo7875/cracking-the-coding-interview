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

    peek() {
        if (!this.isEmpty()) return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

let arr = new stack();

arr.push(9);
arr.push(6);
arr.push(2);
arr.push(12);
arr.push(4);

function sortStack(arr) {
    let sorted = [];
    
    while (arr.length !== 0) {
        let val = arr.pop();

        if (sorted.length === 0) sorted.push(val);
        else if (sorted.length === 1) {
            if (sorted[0] > val) sorted.push(val);
            else sorted.unshift(val);
        } 
        else {
            let left = 0;
            let right = sorted.length - 1;

            while (left <= right) {
                let mid = Math.floor(left + (right - left) / 2);

                if (sorted[mid] < val) right = mid - 1;
                else left = mid + 1;
            }

            sorted.splice(left, 0, val);
        }
    }

    return sorted;
}

console.log(sortStack(arr.stack));

// TC

// O(nlogn), n = arr.length, log n = binary search