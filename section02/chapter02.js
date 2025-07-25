// short circuit Evaluation

function returnFalse() {
  console.log("False");
  return undefined;
}

function returnTrue() {
  console.log("True");
  return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍한희" });

// undefine -> name = person, undefine || 문자열
//person의 값이 falsy한 값이면 출력x -> if문 사용x
