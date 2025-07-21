// math 모듈
function add(a, b) {
  return a + b;
} // 앞에 export를 써서 사용해도 된다

function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

export { add, sub };

//module.exports = {
//add: add,
//sub: sub,
//};
