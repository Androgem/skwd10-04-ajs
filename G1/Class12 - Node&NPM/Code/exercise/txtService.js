const fs = require('fs');

const file = 'test.txt';

const textService = {
  addText: function (text) {
    fs.writeFile(file, text, () => {
      console.log('The file was saved!');
    });
  },
  appendText: function (text) {
    fs.appendFile(file, text, () => {
      console.log('The file was saved');
    });
  },
  readText: function () {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
      console.log(data);
    });
  },
};

module.exports = textService;

