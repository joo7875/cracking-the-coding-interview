class TreeNode {
    constructor(val) {
        this.val = val || null;
        this.left = null;
        this.right = null;
    }

    add(val) {
        if (!this.val) this.val = val;
        else if (val < this.val) {
            if (!this.left) this.left = new TreeNode(val);
            else this.left.add(val);
        }
        else {
            if (!this.right) this.right = new TreeNode(val);
            else this.right.add(val);
        }
    }
    
}