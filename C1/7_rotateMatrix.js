const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotateMatrix(matrix) {
    
    const row = matrix.length;
    const col = matrix[0].length;

    // transpose
    for (let i = 0; i < row; i++) {
        for (let j = i+1; j < col; j++) {
            if (i !== j) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // reverse
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < Math.floor(col / 2); j++) {
            [matrix[i][j], matrix[i][col - j - 1]] = [matrix[i][col - j - 1], matrix[i][j]];
        }
    }

    return matrix;
}

console.log(rotateMatrix(matrix));

// TC: O(n^2)