const matrix = [
    [1, 2, 3],
    [4, 5, 0],
    [7, 8, 9]
];

function zeroMatrix(matrix) {

    const row = matrix.length;
    const col = matrix[0].length;

    let zero = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) zero.push([i, j]);
        }
    }

    for (let [x, y] of zero) {
        for (let i = 0; i < row; i++) matrix[i][y] = 0;
        for (let j = 0; j < col; j++) matrix[x][j] = 0;
    }

    return matrix;
}

console.log(zeroMatrix(matrix));