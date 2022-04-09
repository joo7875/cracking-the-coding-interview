function pathsWithSum(target, root) {

    return recur(target, root, 0, new Map());

    function recur(target, root, runningSum, path) {
        if (!root) return 0; // base case

        runningSum += root.val;
        let sum = runningSum - target;
        let total = path.get(sum) || 0;

        if (runningSum === target) total++;

        incrementMap(path, runningSum, 1);
        total += recur(target, root.left, runningSum, path);
        total += recur(target, root.right, runningSum, path);
        incrementMap(path, runningSum, -1);

        return total;
    }

    function incrementMap(map, key, delta) {
        let newCount = (map.get(key) || 0) + delta;

        if (newCount === 0) map.delete(key);
        else map.set(key, newCount);
    }

}

let root = new TreeNode();

root.add(5);
root.add(3);
root.add(10);
root.add(2);
root.add(4);
root.add(8);

console.log(pathsWithSum(8, root));