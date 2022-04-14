function paintFill(grid, r, c, newColor) {
    if (grid[r][c] === newColor) return false;
    
    let m = grid.length;
    let n = grid[0].length;
    const dir = [[0,1], [1,0], [-1,0], [0,-1]];

    dfs(r, c, grid[r][c], newColor);

    return grid;

    function dfs(r, c, color, newColor) {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== color) return false;

        grid[r][c] = newColor;
        for (let [dx, dy] of dir) dfs(r + dx, c + dy, color, newColor);
    }
}

const grid = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0],
];

console.log(paintFill(grid, 0, 0, 2));
// console.log(paintFill(grid, 3, 3, 2));