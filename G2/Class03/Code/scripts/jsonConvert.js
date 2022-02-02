let academy = {
    trainer : "Test Trainer",
    assistant: "Test Assistant",
    name: "SEDC",
    students: ["John", "Paul", 'Kate']
};

//serialization (get JSON string)
let jsonString = JSON.stringify(academy);
console.log(`Json string: ${jsonString}`);

// parsing/deserialization
let jsObject = JSON.parse(jsonString);
console.log(jsObject);
console.log(jsObject.trainer);

