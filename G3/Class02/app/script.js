function Book(title, author, year) {
    this.id = Math.round(Math.random() * 1000000);
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;

    this.changeAvailability = function () {
        this.isAvailable = !this.isAvailable;
    }
}

let booksDb = {
    books: [],

    // refactor after implementing add functionality
    generateBooks: function () {
        for (let index = 0; index < 10; index += 1) {
            this.addBook(new Book(`Book${index}`, `${index % 2 === 0 ? 'B': 'A'}uthor${index}`, 1990 + (index * 2)));
        }
    },

    getBooks: function () {
        return this.books;
    },

    getBookById: function (id) {
        for (let index = 0; index < this.books.length; index += 1){
            let book = this.books[index];
            if (book.id === id) {
                return book;
            }
        }
        return null;
    },

    addBook: function (book) {
        let oldLength = this.books.length; // 10
        this.books.push(book); // 11
        return oldLength !== this.books.length; // 10 !== 11
    },

    deleteBook: function (id) {
        let indexForRemoval = -1;
        
        let index = 0;
        while (index < this.books.length) {
            let book = this.books[index];
            if (book.id === id) {
                indexForRemoval = index;
                break;
            }

            index++;
        }

        if (indexForRemoval === -1) {
            return null;
        }
        let deletedBooks = this.books.splice(indexForRemoval, 1);
        return deletedBooks[0];
    }
}

booksDb.generateBooks();

let booksService = {
    showBooks: function (books, htmlElement) {
        htmlElement.innerHTML = '';
        for (let book of books) {
            let li = document.createElement('li');
            if (book.isAvailable) {
                li.style.color = 'green';
            } else {
                li.style.color = 'red';
            }
            // li.style.color = book.isAvailable ? 'green' : 'red'; // setting value using thernary opperator
            li.innerHTML = `Id: ${book.id} <br>
                            Title: ${book.title} <br>
                            Author: ${book.author} <br>
                            Year: ${book.year}`;
            htmlElement.appendChild(li);
        }
    },

    searchAuthorByLetter: function (letter, books) {
        let filteredBooks = [];
        for (let book of books) {
            if (book.author.toLowerCase().startsWith(letter.toLowerCase())) { // Trajan -> trajan === A -> a
                filteredBooks.push(book);
            }
        }
        return filteredBooks;
    }
}

// Html elements that are reusable
let showItemsList = document.getElementById("books");
let bookIdElement = document.getElementById("bookId");

// Events

document
    .getElementById("showBooks")
    .addEventListener('click', function () {
        // will show all the books
        booksService.showBooks(booksDb.getBooks(), showItemsList);
    });

document
    .getElementById('save-btn')
    .addEventListener('click', function () {
        let inputs = document
            .getElementById('add-book-container')
            .querySelectorAll('input');
        let values = {};
        for (let input of inputs) {
            values[input.name] = input.value;
        }
        let book = new Book(values.title, values.author, values.year);
        let isAdded = booksDb.addBook(book);
        if (isAdded) {
            // show information message if the book is added
        } else {
            // show information message if the book is added
        }
        booksService.showBooks(booksDb.getBooks(), showItemsList);
    });

document
    .getElementById('lend-btn')
    .addEventListener('click', function () {
        let id = parseInt(bookIdElement.value);
        let book = booksDb.getBookById(id);
        if (!book) {
            // show information message
        } else {
            book.changeAvailability();
        }
        booksService.showBooks(booksDb.getBooks(), showItemsList);
    });

document
    .getElementById('delete-btn')
    .addEventListener('click', function () {
        let id = parseInt(bookIdElement.value);
        let book = booksDb.deleteBook(id);
        if (book) {
            // show information message
        } else {
            // show information message
        }
        booksService.showBooks(booksDb.getBooks(), showItemsList);
    });

document
    .getElementById('letter-btn')
    .addEventListener('click', function () {
        let searchByLetter = document.getElementById('letter-search').value;
        let filteredBooks = booksService
            .searchAuthorByLetter(searchByLetter, booksDb.getBooks());
        if (filteredBooks.length === 0) {
            // show information message
            return;
        }
        booksService.showBooks(filteredBooks, showItemsList);
    });