// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //console.log(arr2[i]);
}

// 1.2 for of 반복문 (배열에서만 사용)
// of 뒤에 있는 배열의 값을 아이템에 하나씩 저장함
for (let item of arr) {
  //console.log(item);
}

// 2. 객체 순회
let person = {
  name: "홍한희",
  age: 26,
  hobby: "코딩",
};

// 2.1 Objects.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  //console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  //console.log(key, value);
}

// 2.2 Objects.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
  // console.log(value);
}

// 2.3 for in (객체에서만 사용)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
