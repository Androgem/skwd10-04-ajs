const txtServce = require('./txtService');

txtServce.addText('Hello');
txtServce.appendText('\nThis is in a new line');
console.log(txtServce.readText());
