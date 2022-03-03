function hi(name) {
  console.log(`Hi there ${name}!`);
}
function bye(name) {
  console.log(`Bye there ${name}!`);
}
// Exports only one

// module.exports = hi
// module.exports = bye;

// Exports Both

module.exports = {
  hi: hi,
  bye: bye,
};
