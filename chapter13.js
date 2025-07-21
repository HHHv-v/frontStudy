// 콜백함수 -> 나중에 실행되는 함수, 원하는 타이밍에 부를 수 있다
function main(value) {
  console.log(1);
  value(); // -> 인수로 전달받아서 실행
  console.log("end");
}

function sub() {
  console.log("i am sub");
}

main(sub);

main(function sub() {
  console.log("i am sub");
});

main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

//번거로움!
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
