// 1. 함수표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 변수에 담아짐

varA(); // 변수자체를 함수로 사용

let varB = function () {
  //익명함수
  console.log("funcB");
}; // 선언식이 아니라 값으로써 저장

varB(); // funB()는 불가능, 호이스팅x

// 2. 화살표 함수
// 원본
let varD = function () {
  return 1;
};

let varC = () => 1;
//function과 return문 삭제 가능
console.log(varC());

let varE = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varE(10));
