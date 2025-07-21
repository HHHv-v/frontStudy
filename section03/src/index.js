//const moduleData = require("./math");
// const{add,sub} 이렇게 사용도 가능

import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
console.log(add(1, 2));
console.log(sub(4, 3));
console.log(mul(2, 3));
