function BSTSquences(root) {
    
    let seq = [];

    let startPath = {};
    startPath[root.val] = true;
    recur([root], startPath);

    return seq;


    function recur(nodes, path) {
        let noChild = true;

        nodes.forEach(node => {
            if (node.left && path[node.left.val] === undefined) {
                noChild = false;
                path[node.left.val] = true;

                recur(nodes.concat([node.left]), path);
                delete path[node.left.val];
            }

            if (node.right && path[node.right.val] === undefined) {
                noChild = false;
                path[node.right.val] = true;

                recur(nodes.concat([node.right]), path);
                delete path[node.right.val];
            }
        });

        if (noChild) seq.push(nodes.map(node => node.val));
    }
    
}

let root = new TreeNode(5);

root.add(3);
root.add(10);
root.add(2);
root.add(4);

// let root = new TreeNode(2);

// root.add(1);
// root.add(3);

console.log(BSTSquences(root));