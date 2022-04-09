function validateBST(root) {

    return dfs(root, null, null);
    
    function dfs(root, left, right) {
        if (!root) return true;

        // console.log(root.val, left, right);

        if ((left && root.val <= left) || (right && root.val >= right)) return false;

        return dfs(root.left, left, root.val) && dfs(root.right, root.val, right);
    }
}

let root_1 = new TreeNode(5);
let root_2 = new TreeNode(2);
let root_3 = new TreeNode(6);
let root_4 = new TreeNode(1);
let root_5 = new TreeNode(100); // false
let root_6 = new TreeNode(3); // true

root_1.left = root_2;
root_1.right = root_3;
root_2.left = root_4;
root_2.right = root_5; // false
// root_2.right = root_6; // true

console.log(validateBST(root_1));