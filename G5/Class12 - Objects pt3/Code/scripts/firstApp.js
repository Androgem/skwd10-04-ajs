console.log("Export/Import Module");

// 1. Add Live Server plugin on VS Code
// 2. In our HTML, we need to specify the type in script tag, in order to use export/import module

// import { sumOfTwo, someArray } from './secondApp.js'

// console.log(sumOfTwo(someArray[3], someArray[4]));

import * as dataFromApp from "./secondApp.js";

console.log(dataFromApp.sumOfTwo(15, 20));

console.log(dataFromApp.anotherArray);