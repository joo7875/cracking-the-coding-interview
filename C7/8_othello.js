const dir = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
    upLeft: [-1, -1],
    upRight: [-1, 1],
    downLeft: [1, -1],
    downRight: [1, 1]
};

const flipColor = {
    white: 'black',
    black: 'white'
};

class Piece {
    constructor(color) {
        this.side = color;
    }

    flip() {
        if (this.side === 'white') this.side = 'black';
        else this.side = 'white';
    }
}

class Board {
    constructor(n = 8) {
        if (n % 2 !== 0) throw 'error, board must be of even length';

        this.n = n;
        this.board = this.createBoard(n);
        this.board[n/2 - 1][n/2 - 1] = new Piece('white'); 
        this.board[n/2][n/2] = new Piece('white');
        this.board[n/2 - 1][n/2] = new Piece('black');
        this.board[n/2][n/2 - 1] = new Piece('black');
    }

    createBoard(n) {
        let board = [];

        for (let i = 0; i < n; i++) {
          let row = [];
          for (let j = 0; j < n; j++) row.push(null);
          board.push(row);
        }

        return board;
    }

    logBoard() {
        for (let i = 0; i < this.n; i++) {
            console.log(this.board[i].map((piece) => {
                return piece !== null ? piece.side : null;
            }));
        }
    }

    placePiece(color, row, col) {
        if (this.board[row][col] === null) console.log('piece already exists in that place');
        else if (!this.legalMove(color, row, col)) console.log('this is not a legal move');
        else {
            this.board[row][col] = new Piece(color);
            this.flipPieces(color, row, col);
        }
    }

    canFlip(color, row, col, direction) {
        let movement = dir[direction];
        let currRow = row + movement[0];
        let currCol = col + movement[1];

        if (currRow === this.n || currCol === this.n || currRow === -1 || currCol === -1) return false;
        if (this.board[currRow][currCol] === null || this.board[currRow][currCol].side === color) return false;

        while(this.board[currRow][currCol] !== null && this.board[currRow][currCol].side === flipColor[color]) {
            currRow = currRow + movement[0];
            currCol = currCol + movement[1]; 
        }

        return this.board[currRow][currCol] !== null && this.board[currRow][currCol].side === color;
    }

    PiecesToFlip(color, row, col) {
        return this.canFlip(color, row, col, 'up') ||
        this.canFlip(color, row, col, 'down') ||
        this.canFlip(color, row, col, 'left') ||
        this.canFlip(color, row, col, 'right') ||
        this.canFlip(color, row, col, 'upLeft') ||
        this.canFlip(color, row, col, 'upRight') ||
        this.canFlip(color, row, col, 'downLeft') ||
        this.canFlip(color, row, col, 'downRight');
    }

    legalMove(color, row, col) {
        console.log('checking legal move');

        if (this.board[row][col] !== null) {
            console.log(`${row}, ${col} is already taken up`);
            return false;
        } 
        else if (!this.PiecesToFlip(color, row, col)) {
            console.log(`${row}, ${col} - no pieces for ${color} to flip`);
            return false;
        } 
        else return true;
    }

    flipPiece(color, row, col, direction) {
        let movement = dir[direction];
        let currRow = row + movement[0];
        let currCol = col + movement[1];

        while(this.board[currRow][currCol].side === flipColor[color]) {
            this.board[currRow][currCol].side = color;
            currRow = row + movement[0];
            currCol = col + movement[1];    
        }
    }

    flipPieces(color, row, col) {
        if (this.canFlip(color, row, col, 'up')) this.flipPiece(color, row, col, 'up');
        if (this.canFlip(color, row, col, 'down')) this.flipPiece(color, row, col, 'down');
        if (this.canFlip(color, row, col, 'left')) this.flipPiece(color, row, col, 'left');
        if (this.canFlip(color, row, col, 'right')) this.flipPiece(color, row, col, 'right');
        if (this.canFlip(color, row, col, 'upLeft')) this.flipPiece(color, row, col, 'upLeft');
        if (this.canFlip(color, row, col, 'upRight')) this.flipPiece(color, row, col, 'upRight');
        if (this.canFlip(color, row, col, 'downLeft')) this.flipPiece(color, row, col, 'downLeft');
        if (this.canFlip(color, row, col, 'downRight')) this.flipPiece(color, row, col, 'downRight');
    }

    placePiece(color, row, col) {
        if (!this.legalMove(color, row, col)) console.log('this move is not legal');
        else {
            console.log('placing piece');
            this.board[row][col] = new Piece(color);
            this.flipPieces(color, row, col);
        }
    }

    checkScore() {
        let score = {
            black: 0,
            white: 0
        };

        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.board[i][j] !== null) score[this.board[i][j].side]++;
            }    
        }
        console.log(`the current score is: black ${score.black}, white ${score.white}`);
    }
}
  
  
/* TEST */
let ob = new Board();

ob.logBoard();
ob.checkScore();
ob.placePiece('black', 2, 3);
ob.logBoard();
ob.placePiece('white', 5, 5);
ob.placePiece('white', 4, 2);
ob.logBoard();
ob.placePiece('black', 7, 7);
ob.placePiece('black', 5, 5);
ob.logBoard();