const http = require('http');

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let user = [
        {
            name: "Pane",
            age: 29,
            gender: "M"
        },
        {
            name: "Petre",
            age: 28,
            gender: "M"
        }
    ]

    res.write(JSON.stringify(user));
    res.end();
})

server.listen(port, hostName, () => {
    console.log(`Server is running on hostname: ${hostName} and listens on port ${port}`)
})