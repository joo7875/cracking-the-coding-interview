function firstCommonAncestor(p, q, root) {

    if (!root) return null;
    if (root.val === p || root.val === q) return root;

    let left = firstCommonAncestor(p, q, root.left);
    let right = firstCommonAncestor(p, q, root.right);

    if (left && right) return root;
    if (!left && !right) return null;

    return left ? left : right;
}

let root = new TreeNode(10);

root.add(5);
root.add(2);
root.add(8);
root.add(20);
root.add(3);
root.add(16);
root.add(41);

console.log(firstCommonAncestor(2, 20, root)); // need to check if p or q is existed in the tree

// TC: O(n)