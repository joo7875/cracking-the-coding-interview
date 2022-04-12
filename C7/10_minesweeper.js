class Minesweeper {
    constructor(n, b) {
        this.board = null;
        this.init(n, b);
    }

    init(n, b) {
        this.board = this.createBoard(n);
        this.insertBomb(b);
        this.computeCells();

        console.log('now let\'s start playing minesweeper!');
    }

    createBoard(n) {
        let board = [];

        for (let i = 0; i < n; i++) {
            board.push([]);
            for (let j = 0; j < n; j++)
                board[i].push({ isBomb: false, reveal: false, display: null });
        }

        return board;
    }

    insertBomb(b) {
        let count = 0;
        let len = this.board.length;
        let row;
        let col;

        while (count < b) {
            row = Math.floor(Math.random() * len);
            col = Math.floor(Math.random() * len);

            if (!this.board[row][col].isBomb) {
                this.board[row][col].isBomb = true;
                count++;
            }
        }
    }

    check(row, col) {
        if (this.board[row][col].isBomb) {
            console.log(`boom! ${row}, ${col} is a mine`);
            this.__printBoard();
        }
        else {
            this.explore(row, col);
            console.log('not bad! now check your next spot');
            this.printBoard();
        }
    }

    export(row, col) {

        const dir = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];

        if (this.board[row] !== undefined && this.board[row][col] !== undefined && !this.board[row][col].isBomb && !this.board[row][col].reveal) {
            this.board[row][col].reveal = true;

            if (this.board[row][col].display === 0) {
                for (let [dx, dy] of dir)
                    this.explore(row + dx, col + dy);
            }
        }
    }

    computeCells() {
        let len = this.board.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++)
                this.computeCell(i, j, len);
        }
    }

    computeCell(row, col, n) {
        if (this.board[row][col].isBomb) {
            this.board[row][col].display = 'B';
            return;
        }

        let count = 0;

        // up row - 1, col
        if (row !== 0) count += this.board[row - 1][col].isBomb ? 1 : 0;

        // down row + 1, col
        if (row !== n - 1) count += this.board[row + 1][col].isBomb ? 1 : 0;

        // left row, col - 1
        if (col !== 0) count += this.board[row][col - 1].isBomb ? 1 : 0;

        // right row, col + 1
        if (col !== n - 1) count += this.board[row][col + 1].isBomb ? 1 : 0;

        // upleft row - 1, col - 1
        if (col !== 0 && row !== 0) count += this.board[row - 1][col - 1].isBomb ? 1 : 0;

        // upright row - 1, col + 1
        if (row !== 0 && col !== n - 1) count += this.board[row - 1][col + 1].isBomb ? 1 : 0;

        // downleft row + 1, col - 1
        if (row !== n - 1 && col !== 0) count += this.board[row + 1][col - 1].isBomb ? 1 : 0;

        // downright row + 1, col + 1
        if (row !== n - 1 && col !== n - 1) count += this.board[row + 1][col + 1].isBomb ? 1 : 0;

        this.board[row][col].display = count.toString();
    }

    __printBoard() {
        let len = this.board.length;

        for (let i = 0; i < len; i++) {
            console.log(this.board[i].map(el => {
                return el.display;
            }).join('|'));
        }
    }

    printBoard() {
        let len = this.board.length;

        for (let i = 0; i < len; i++) {
            console.log(this.board[i].map(el => {
                return el.reveal ? el.display : 'x';
            }).join('|'));
        }
    }
}

var ms = new Minesweeper(10, 20);
ms.__printBoard();
console.log();
ms.printBoard();