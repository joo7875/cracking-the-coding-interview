function checkSubtree(root, sub) {
    if (!root) return false;
    if (recur(root, sub)) return true;

    return checkSubtree(root.left, sub) || checkSubtree(root.right, sub);

    function recur(root, sub) {
        if (!root && !sub) return true;
        if (!root || !sub) return false;

        if (root.val !== sub.val) return false;

        return recur(root.left, sub.left) && recur(root.right, sub.right);
    }
}

let t1 = new TreeNode(5);

t1.add(3);
t1.add(10);
t1.add(2);
t1.add(4);

let t2 = new TreeNode(3);

t2.add(2);
t2.add(4);

console.log(checkSubtree(t1, t2));