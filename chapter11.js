// 함수선언

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); //소괄호 필수
console.log("호출 후");

let area1 = getArea(10, 20); //인수
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

function getArea(width, height) {
  function another() {
    // 중첩함수 가능
    console.log("another");
  }
  another();
  //매개변수
  //let width = 10;
  //let height = 20;
  let area = width * height;
  //console.log(area);
  return area;
}

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문이 호출문보다 아래 있어도 호이스팅해서 올려줌
