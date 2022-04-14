function robotInAGrid(grid) {
    
    if (grid[0] === 'x') return null;

    let path = [];
    let m = grid.length;
    let n = grid[0].length;

    dfs(0, 0, []);

    return path;

    function dfs(r, c, cur) {
        if (r === m - 1 && c === n - 1) path.push([...cur, [r, c]]);

        if (r >= 0 && c >= 0 && r < m && c < n && grid[r][c] !== 'x') {
            cur.push([r, c]);

            dfs(r + 1, c, [...cur]);
            dfs(r, c + 1, [...cur]);
        }
    }
}

const grid = [
    ['0', '0', '0', '0'],
    ['0', 'x', '0', 'x'],
    ['x', '0', '0', '0'],
];

console.log(robotInAGrid(grid));

// TC: O(rc)