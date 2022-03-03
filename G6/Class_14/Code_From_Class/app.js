const http = require("http");
const fs = require("fs");

// let requestListener = (req, res) => {
//     console.log("I AM WAITING FOR REQUESTS!")
// }

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = req.url;
  const method = req.method;
  if (url === "/") {
    console.log("I am in");
    res.write("<html>");
    res.write("<body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"/> </form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(body);
    });
    req.on("end", () => {
      let parsedBody = Buffer.from(body).toString();
      console.log(parsedBody);
    });
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3001);
