class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state = this._state * 1.5;
    }

    set state(state) {
        if (state === 0) {
            this._state = 0;
        } if (state > 100) {
            this._state = 100;
        }
        else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        const boo = new Book(book);

        if (boo.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if ((this.books.find(book => book[type] === value)) != undefined) {
            return this.books.find(book => book[type] === value);
        } else {
            return null
        }
    }

    giveBookByName(bookName) {
        if (this.books.find(book => book.name === bookName) != undefined) {
            let x = this.books.find(book => book.name === bookName);
            this.books = this.books.filter(book => book.name != bookName);
            return x;
        } else {
            return null
        }
    }
}