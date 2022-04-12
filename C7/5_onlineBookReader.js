class User {
    constructor(name = null, membership = null) {
        this.name = name;
        this.membership = membership;
    }
}

class Book {
    constructor(book) {
        this.book = book;
        this.reader = new User();
    }
}

class BookDB {
    constructor() {
        this.booklist = [];
    }

    addBook(book, reader = null) {
        if (this.booklist.some(el => el.book === book)) console.log('book exists')
        else this.booklist.push(new Book(book, reader));
    }

    addReader(book, name, membership) {
        if (!membership) {
            console.log('membership not available');
            return;
        }
        
        if (this.booklist.some(el => el.book === book)) {
            let idx = this.booklist.findIndex(el => el.book === book);
            let user = this.booklist[idx].reader;

            user.name = name;
            user.membership = membership;
        }
        else console.log('The book is not on DB');
    }
}

const db = new BookDB();

db.addBook('a');
db.addBook('b');
db.addBook('c');
db.addBook('d');
db.addBook('e');

db.addReader('a', 'mark', true);
db.addReader('d', 'sarah', false);

console.log(db);