// A single-threaded non-blocking asynchronous concurrent
// Single-threaded means that it has one threaded (it can do one thing at a time) code is executeded in one place

// setTimeOut //setInterval

let printName = (fullName) => console.log(`Full name is: ${fullName}`);

let ourTimeOutFunc = () => {
  setTimeout(() => console.log("Call executed for 3 secs"), 3000);
};

ourTimeOutFunc();
printName("John Doe");
