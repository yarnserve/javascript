// 1. 조건 연산 - if, else if, else

const age = 33;

if (age >= 20) {
  console.log("성인입니다.");
} else {
  console.log("돌아가세요");
}

const month = 100;

if (month >= 3 && month <= 5) {
  console.log("spring....");
} else if (month >= 6 && month <= 8) {
  console.log("summer....");
} else if (month >= 9 && month <= 11) {
  console.log("fall....");
} else {
  console.log("winter....");
}

// 2. 삼항 조건 연산자
// 조건 ? 값1 : 값2
const myAge = 12;
console.log(myAge >= 20 ? "성인" : "청소년");

// 3. switch문

const color = "green";

switch (color) {
  case "red":
    console.log("I like red");
    break;
  case "blue":
    console.log("I like Blue");
    break;
  case "green":
    console.log("I like Green");
    break;
  default:
    console.log("I dont konw");
    break;
}
