// 자료형 - 원시타입
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;

console.log(1 * "hello"); // 연산이 불가능한 값 NaN

// 2. String Type : 덧셈이 가능하다
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿 리터럴 문법 ★★★
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null; // -> 명시적으로 할당해줘야하는 값

// 5. Undefined Type -> 자동으로 들어가는 값
let none;
console.log(none);
