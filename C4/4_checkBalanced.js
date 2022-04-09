function checkBalanced(root) {

    return dfs(root) !== -1;

    function dfs(root) {

        if (!root) return 0;

        let left = dfs(root.left);
        if (left === -1) return -1;

        let right = dfs(root.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        // console.log(root.val, left, right);

        return Math.max(left, right) + 1;
    }

}

let root_true = new TreeNode(10);
let root_false = new TreeNode(5);

root_true.add(5);
root_true.add(2);
root_true.add(8);
root_true.add(20);
root_true.add(3);
root_true.add(16);
root_true.add(41);

root_false.add(4);
root_false.add(6);
root_false.add(3);
root_false.add(2);
root_false.add(1);

console.log(checkBalanced(root_false));