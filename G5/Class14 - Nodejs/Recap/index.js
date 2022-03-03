// Classes are factories

class Book {
  constructor(id, name, isbn, price) {
    console.log("Hello my friend :)");
    this.id = id;
    this.name = name;
    this.isbn = isbn;
    this.price = price;
  }

  printBookName() {
    return `Book name is ${this.name} and price is ${this.price}`;
  }
}

let bookOne = new Book(1, "Harry Potter", 1237, 250);
console.log(bookOne);

console.log(bookOne.printBookName());
// It wont work ma frend
// console.log(Book.printBookName());

// let literalBook = {};
//let literalBook2 = new literalBook() // Dont do this!

class AudioBook extends Book {
  constructor(id, name, isbn, price, audioPublisher) {
    super(id, name, isbn, price);
    this.audioPublisher = audioPublisher;
  }

  static printSomething(something) {
    // return something;

    return this.printSomethingElse(something);
  }

  static printSomethingElse(somethingElse) {
    return somethingElse;
  }
}

let audioBookOne = new AudioBook(
  2,
  "Audio Book Something",
  1111,
  1000,
  "Audio Inc."
);

console.log(audioBookOne);
console.log(AudioBook.printSomething("Hello World :)"));
