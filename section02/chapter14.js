// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}
// 객체를 반환x 객체를 결과값으로 갖는 새로운 프로미스로 바뀜
// 애초에 프로미스를 반환하는 비동기함수였다면 별 다른 기능을 하지않음
console.log(getData());

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData(); //then을 사용안해도 된다
  console.log(data);
}
