// function successor(root, result = []) {
//     if (root) {
//         successor(root.left, result);
//         result.push(root.val);
//         successor(root.right, result);
//     }

//     return result;
// }

function successor(x, root) {

    let result = [];
    dfs(root, result);

    let index = result.indexOf(x);
    if (index + 1 < result.length) return result[index + 1];

    function dfs(root, result) {
        if (root) {
            dfs(root.left, result);
            result.push(root.val);
            dfs(root.right, result);
        }
    }
}

let root = new TreeNode(10);

root.add(5);
root.add(2);
root.add(8);
root.add(20);
root.add(3);
root.add(16);
root.add(41);

console.log(successor(41, root));