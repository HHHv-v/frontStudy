// 6가지의 요소 조작 메서드

// 1.push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// -> push는 새로운 배열의 길이를 반환함

let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength);

// 2.pop
// -> 배열의 맨 뒤에 있는 요소를 제거 및 반환

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem);
console.log(arr2);

// 3.shift
// -> 배열의 맨 앞에 있는 요소를 제거 및 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

// 4.unshift
// -> 배열의 맨 앞에 새로운 요소를 추가함
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4);
console.log(newLength2);

// +) shift는 push나 pop보다 느리게 동작함
// -> 배열의 특징 때문임
// -> 맨앞의 요소를 움직이기때문에 배열 전체 이동 필요

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 마지막 인덱스 번호+1
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1);

console.log(sliced);
console.log(arr5); // 원본 배열의 값은 변화X
console.log(sliced2); // 마지막까지 자를때는 필요x
console.log(sliced3); // 반대로 잘라줌

// 6. concat
// -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
