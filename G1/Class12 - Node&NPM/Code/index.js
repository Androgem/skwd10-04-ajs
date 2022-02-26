function sayHello(name) {
  console.log('Hello ' + name);
}

// sayHello('Dimitar');

// console.log(__filename);

// global.console.log('Hello from global')

const action = () => {
  console.log('ACTIONNNNNNNN');
};

module.exports = action;

const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log('Total memory: ' + totalMemory);
console.log('Free memory: ' + freeMemory);

const fs = require('fs');

const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('#', function (err, files) {
//   if (err) console.log('Error: ' + err);
//   else console.log('Result: ' + files);
// });

// fs.writeFile('newFile.txt', 'Hello SEDC Academy', () => {});

const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLoaded', function (data) {
  console.log('Listener called', data);
});

// Emit - product something, signaling
emitter.emit('messageLoaded', { id: 1, name: 'Dimitar' });

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello from /');
    res.end();
  } else if (req.url === '/home') {
    res.write('Hello from Home');
    res.end();
  } else {
    res.write('Hello from nowhere');
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('New connection.........');
});

server.listen(3000);

