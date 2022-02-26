export { mesages, getRandomWord };
let mesages = {
  helloVariants: ["Hey", "Hi", "Hello", "Yo"],
  byeVariants: ["Bye", "Goodbye", "Cheers", "Peace"],
};

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
