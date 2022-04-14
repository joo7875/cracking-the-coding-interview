function eightQueens(n) {

    let col = new Set();
    let pos = new Set();
    let neg = new Set();

    let result = [];
    let board = new Array(n).fill('.').map(() => new Array(n).fill('.'));

    recur(0);

    return result;

    function recur(r) {
        
        if (r === n) {
            result.push([...board].map(row => row.join('')));
            return;
        }

        for (let c = 0; c < n; c++) {

            if (col.has(c)) continue;

            let posDiag = r + c;
            if (pos.has(posDiag)) continue;

            let negDiag = r - c;
            if (neg.has(negDiag)) continue;

            col.add(c);
            pos.add(posDiag);
            neg.add(negDiag);
            board[r][c] = 'Q';

            recur(r + 1);

            col.delete(c);
            pos.delete(posDiag);
            neg.delete(negDiag);
            board[r][c] = '.';

        }
    }
}

console.log(eightQueens(4));