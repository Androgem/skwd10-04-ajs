import * as library from './library-service.js';

const newBook = {
    title: "Seat 7a",
    authour: "Sebastian Fitzek",
    pageCount: "400"
};

library.addBookToLibrary(newBook);
