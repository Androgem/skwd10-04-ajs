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
            this.books.push(new Book(`Book${index}`, `Author${index}`, 1990 + (index * 2)));
        }
    },

    getBooks: function () {
        return this.books;
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
    }
}

// Html elements that are reusable
let showItemsList = document.getElementById("books");

// Events

document
    .getElementById("showBooks")
    .addEventListener('click', function () {
        // will show all the books
        booksService.showBooks(booksDb.getBooks(), showItemsList);
    })