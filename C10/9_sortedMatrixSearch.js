function sortedMatrixSearch(grid, target) {

    let r = 0;
    let c = grid[0].length - 1;

    while (r < grid.length && c >= 0) {

        if (grid[r][c] === target) return true;
        else if (grid[r][c] > target) c--;
        else r++;
    }

    return false;
}

const grid = [
    [1, 3, 6, 10],
    [11, 25, 26, 29],
    [30, 51, 63, 80],
    [92, 103, 150, 200]
];
console.log(sortedMatrixSearch(grid, 51));