//Promise : 비동기작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num == "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
      //console.log("안녕");
      //resolve("안녕");
      //reject("왜 실패했는지 이유...");
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
    // then 메서드의 결과값으로 반환
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드 -> resolve 그 후에 (성공했을때만 호출)

// promise.then((value) => {
//   console.log(value);
// });

// promise.catch((error) => {
//   console.log(error);
// });

// then, catch -> 다시 promise 객체를 반환하는데 이는 똑같음
// promise 체이닝 기법

// promise.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });
