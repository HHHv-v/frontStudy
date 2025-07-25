// 5가지 배열 변형 메서드
// 1.filter ★★★
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

//const tennisPeople = arr1.filter((item) => {
//  if (item.hobby === "테니스") return true;
//});

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort (숫자는 못함xxx -> 콜백함수도 같이 넘겨줘야함)
// -> 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];

//오름차순 정렬 방법 (내림차순은 반대로)
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라 (b,a 배치)
    return 1; // 더 작은 값이 앞으로 옴
  } else if (a < b) {
    //a가 b 앞에 와라 (a,b 배치)
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라 (a,b 유지)
    return 0;
  }
});

// console.log(arr4);

// 4.toSorted
// -> 정렬된 새로운 배열을 반환 (원본 배열은 냅둠)

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5.join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환

let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined);
