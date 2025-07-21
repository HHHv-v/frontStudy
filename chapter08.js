// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);
// 값이 존재하는 변수를 대입하여 출력함

let var5 = var1 ?? var3;
console.log(var5);

let var6 = var2 ?? var3;
console.log(var2);
// null값이 없는 경우 첫번째 변수의 값을 저장함

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = 20;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수->"짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
