class Piece {
    constructor(row, col) {
        this.pos = { row, col };
        this.name = Math.random().toString(36).substring(7); // generate random hash
        this.up = null;
        this.down = null;
        this.left = null;
        this.right = null;
    }
}

class Puzzle {
    constructor(n) {
        this.graph = this.createGraph(n);
        this.n = n;
    }

    createGraph(n) {
        let graph = {};
        let arr = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++)
                arr.push(new Piece(i, j));
        }

        arr.sort(() => Math.random() < 0.5 ? 1 : -1);
        arr.forEach(piece => graph[piece.name] = piece);

        return graph;
    }

    match(p1, p2, direction) {
        if (!p1 || !p2) return false;
        else if (direction === 'up') return (p1.pos.row === p2.pos.row + 1) && (p1.pos.col === p2.pos.col);
        else if (direction === 'down') return (p1.pos.row === p2.pos.row - 1) && (p1.pos.col === p2.pos.col);
        else if (direction === 'left') return (p1.pos.row === p2.pos.row) && (p1.pos.col === p2.pos.col + 1);
        else if (direction === 'right') return (p1.pos.row === p2.pos.row) && (p1.pos.col === p2.pos.col - 1);
        else throw 'error, no direction';
    }

    checkPiece(piece) {

        // check up, check null if at top row
        if (piece.pos.row === 0 && piece.up !== null) return false;
        else if (piece.pos.row !== 0 && !this.match(piece, piece.up, 'up')) return false;

        // check down, check null if at bottom row
        if (piece.pos.row === this.n - 1 && piece.down !== null) return false;
        else if (piece.pos.row !== this.n - 1 && !this.match(piece, piece.down, 'down')) return false;

        // check left, check null if at first col
        if (piece.pos.col === 0 && piece.left !== null) return false;
        else if (piece.pos.col !== 0 && !this.match(piece, piece.left, 'left')) return false;

        // check right, check null if at last col
        if (piece.pos.col === this.n - 1 && piece.right !== null) return false;
        else if (piece.pos.col !== this.n - 1 && !this.match(piece, piece.right, 'right')) return false;

        return true;
    }

    checkDone() {
        for (let piece in this.graph) {
            if (!this.checkPiece(this.graph[piece])) return false;
        }

        return true;
    }

    fitPuzzle() {
        for (let p1 in this.graph) {
            for (let p2 in this.graph) {
                if (this.match(this.graph[p1], this.graph[p2], 'up')) {
                    this.graph[p1].up = this.graph[p2];
                    this.graph[p2].down = this.graph[p1];
                }
                else if (this.match(this.graph[p1], this.graph[p2], 'down')) {
                    this.graph[p1].down = this.graph[p2];
                    this.graph[p2].up = this.graph[p1];
                }
                else if (this.match(this.graph[p1], this.graph[p2], 'left')) {
                    this.graph[p1].left = this.graph[p2];
                    this.graph[p2].right = this.graph[p1];
                }
                else if (this.match(this.graph[p1], this.graph[p2], 'right')) {
                    this.graph[p1].right = this.graph[p2];
                    this.graph[p2].left = this.graph[p1];
                }
            }
        }
    }
}

const puzzle = new Puzzle(2);
console.log(puzzle.graph);
console.log(puzzle.checkDone()); // false

puzzle.fitPuzzle();
console.log(puzzle.graph);
console.log(puzzle.checkDone()); // true