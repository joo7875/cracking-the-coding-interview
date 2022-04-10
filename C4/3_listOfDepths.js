function listOfDepths(root) {

    let queue = [root];
    let ll = new LinkedList();

    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            ll.add(node.val);
        }
    }

    return ll;
}

let root = new TreeNode(10);

root.add(5);
root.add(2);
root.add(8);
root.add(20);
root.add(3);
root.add(16);
root.add(41);

//         10
//      5      20
//    2   8  16  41
//     3

console.log(listOfDepths(root)); // 10 -> 5 -> 20 -> 2 -> 8 -> 16 -> 41 -> 3

// TC: O(n)