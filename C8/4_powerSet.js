function powerSet(arr) {

    let result = [];
    let cur = [];

    dfs(0); // arr index
    return result;

    function dfs(i) {
        if (i >= arr.length) {
            result.push([...cur]);
            return;
        }

        cur.push(arr[i]);
        dfs(i + 1);

        cur.pop();
        dfs(i + 1);
    }

}

const set = [1, 2, 3];
console.log(powerSet(set));

// TC: O(n)