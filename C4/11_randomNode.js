// BST

class RandomNode {
    constructor(val) {
        this.val = val || null;
        this.left = null;
        this.right = null;
        this.size = 1;
    }

    insert(val) {
        if (!this.val) this.val = val;
        else if (val < this.val) {
            if (!this.left) this.left = new RandomNode(val);
            else this.left.insert(val);
        }
        else {
            if (!this.right) this.right = new RandomNode(val);
            else this.right.insert(val);
        }
        
        this.size += 1;
    }

    find(val) {
        if (this.val === val) return val;
        else {
            if (val < this.val)
                return this.left ? this.left.find(val) : null;
            else 
                return this.right ? this.right.find(val) : null;
        }
    }

    getSize() {
        return this.size;
    }

    getRandom() {
        let leftSize = this.left ? this.left.size : 0;
        let index = Math.floor(Math.random() * this.size);

        if (index < leftSize) return this.left.getRandom();
        else if (index === leftSize) return this;
        else return this.right.getRandom();
    }
}

let root = new RandomNode(5);

root.insert(3);
root.insert(10);
root.insert(2);
root.insert(4);
root.insert(8);

console.log(root);

console.log(root.find(3));
console.log(root.getSize()); // 6 nodes
console.log(root.getRandom());