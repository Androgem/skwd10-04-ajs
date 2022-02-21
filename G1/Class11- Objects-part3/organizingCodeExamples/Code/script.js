import {
  sayHello,
  sayGoodbye,
  saySomething,
  ListBiding,
} from './modules/speak.js';

sayHello();
sayGoodbye();
saySomething();

console.log('Auto reload');

const myList = document.getElementById('myList');

const lBinding = new ListBiding(myList);
lBinding.deleteList()
lBinding.addElement('Hi')
lBinding.addElement('Bye')
