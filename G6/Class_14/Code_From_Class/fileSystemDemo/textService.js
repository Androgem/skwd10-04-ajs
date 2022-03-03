const fs = require("fs");

let fileName = "test.txt";

module.exports = {
  addText: function (text) {
    fs.writeFileSync(`files/${fileName}`, text, function (err) {
      if (err) {
        console.log("Error: ", err);
        return;
      }
      console.log("The operation of write is finished succesfully!");
    });
  },
  appendText: function (text) {
    fs.appendFileSync(`files/${fileName}`, text, function (err) {
      if (err) {
        console.log("Error: ", err);
        return;
      }
      console.log("The operation of append is finished succesfully!");
    });
  },
  readText: function () {
    return fs.readFileSync(`files/${fileName}`, { encoding: "utf-8" });
  },
};
