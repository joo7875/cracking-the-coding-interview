function minimalTree(arr, s = 0, e = arr.length - 1) {
    
    if (s > e) return null;

    let mid = Math.floor((s + e) / 2);
    
    let root = new TreeNode(arr[mid]);
    root.left = minimalTree(arr, s, mid - 1);
    root.right = minimalTree(arr, mid + 1, e);

    return root;
}

const array = [3, 5, 7, 10, 11, 15, 16];
console.log(minimalTree(array));