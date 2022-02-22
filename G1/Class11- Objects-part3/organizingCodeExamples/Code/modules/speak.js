export { saySomething };

export function sayHello() {
  console.log('Hello from speak.js');
}

export function sayGoodbye() {
  console.log('Goodbye from speak.js');
}

function saySomething() {
  console.log('Something from speak.js');
}

export class ListBiding {
  constructor(element) {
    this.listElement = element;
  }

  deleteList() {
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
  }

  addElement(element) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(element));
    this.listElement.appendChild(li);
  }
}
