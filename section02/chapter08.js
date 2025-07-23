// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// -> 모든 요소를 순회하면서 특정 동작을 수행

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

//console.log(doubledArr);

// 2. includes (탐색)
// -> 배열에 특정 요소가 있는지 확인

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
//console.log(isInclude);

// 3. indexOf (얕은 탐색)
// -> 배열의 인덱스를 찾아서 반환

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
//console.log(index);

// 중복값이 있을 경우 제일 앞의 값 반환
let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2);
//console.log(index2);

let objectArr = [{ name: "홍한희" }, { name: "이정환" }];

console.log(objectArr.findIndex((item) => item.name === "이정환"));

// 4. findIndex (깊은 탐색 (객체탐색))
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 인덱스를 반환

let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => item % 2 !== 0);
//console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr6 = [{ name: "홍한희" }, { name: "홍길동" }];
const finded = arr6.find((item) => item.name === "홍한희");
console.log(finded); // 객체 자체가 반환
