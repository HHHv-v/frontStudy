// 1. 대입 연산자 (=)
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합(산술+대입) 대입 연산자
let num7 = 10;
num7 += 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++;
console.log(++num8);

// 5. 논리 연산자(T/F)
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 값의 자료형을 비교하기 위에 =을 세번씀
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 3 > 2;
let comp4 = 3 < 2;
console.log(comp3, comp4);
