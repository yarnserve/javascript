// 1. function 함수(메서드)
// 함수선언과 호출

function myFunc() {
  console.log("안녕하세요");
}

myFunc();

// 매개변수 parameter
function printMessage(message) {
  console.log(message);
}

printMessage("하하하");
printMessage("파파파");

// 기본 파라미터
function showInfo(title, name = "스티브잡스") {
  console.log(`${title} by ${name}`);
}

showInfo("게르니카", "피카소");
showInfo("풍경");

// Rest 파라미터 / Spread 연산자
function printAll(...items) {
  // for (let i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  // }

  for (const item of items) {
    console.log(item);
  }
}

printAll("봄", "여름", "가을", "겨울", "안녕");

// Scope
let movie = "하하하"; // global변수(전역변수)

function printMovie() {
  let myMovie = "생활의 발견"; // local변수(지역변수)
  console.log(myMovie);
  console.log(movie);
}

printMovie();
// console.log(myMovie);

// 리턴 Return
function plus(a, b) {
  return a + b;
  console.log("계산 잘 되었브니다.");
}

const sum = plus(5, 10);
console.log(sum);

// Arrow function
// function add(c, d) {
//   ...
// }

// const add = function(c, d) {
//   return c + d
// }

const add = (c, d) => c + d;

const total = add(5, 8);
console.log(total);
