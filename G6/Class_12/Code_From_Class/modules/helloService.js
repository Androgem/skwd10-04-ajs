import { mesages, getRandomWord } from "./messageService.js";

export function sayHello(name) {
  console.log(`${getRandomWord(mesages.helloVariants)} thereeeeeeee ${name}`);
}

export function sayGoodBye(name) {
  console.log(`${getRandomWord(mesages.byeVariants)} there ${name}`);
}
