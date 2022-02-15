// Variable 변수
// var, let, const
// scope 블럭 {}

// 1. var
// 블럭을 무시한다.
{
  var age = 30;
  age = 50;
}
console.log(age);

// 2. let
// 읽기, 쓰기 가능하다.
{
  let title = "html";
  console.log(title);

  title = "css";
  console.log(title);
}

// 3. const
// 상수 - 읽기만 가능, 변하지 않는다.
{
  const subject = "java";
  console.log(subject);

  // subject = "javascript";
  // console.log(subject);
}

// 4. 변수의 데이타 타입
// 원시데이타: Number, String, boolean, null, undefined
// object : 싱글데이타를 묶어놓은 데이타
// function : 일급객체

// number
const num = 10;
const width = 20.5;
console.log(num, width);

const a = 1 / 0;
const b = -25 / 0;
const c = "html" / 10;

console.log(a);
console.log(b);
console.log(c);

const num1 = 10;
const num2 = 2;
console.log(num1 % num2);

// String
const firstName = "Jonh";
const lastName = "Snow";
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// null
const fall = null;
console.log(`${fall}이고, 타입은 ${typeof fall}입니다.`);

// undefined
let winter;
console.log(winter);

// boolean
let abc = 100 > 50;
let bbb = 10 < 5;
console.log(abc);
console.log(bbb);

// 5. 동적타입 - 자바스크립트는 런타임(브라우저에서 실행될 때)상태에서 타입이 결정된다.

let word = "winter";
console.log(`값은 ${word}이고, 타입은 ${typeof word}`);
word = 100;
console.log(`값은 ${word}이고, 타입은 ${typeof word}`);
