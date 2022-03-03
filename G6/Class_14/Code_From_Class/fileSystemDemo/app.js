const textService = require("./textService");

textService.addText("This is created automatically by writeFileSync! \n");
textService.appendText("This is added automaticaly by appendFileSync!");
console.log(textService.readText());
