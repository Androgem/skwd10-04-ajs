import { readJSON, saveJSON } from './file-service.js';

export const addBookToLibrary = book => {
    const library = readJSON('./shelf.json')

    library.push(book)

    saveJSON('./shelf.json', library)
}