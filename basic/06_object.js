// 오브젝트 object
// - 자바스크립트 데이타
// - 상태와 행동을 가지는 데이타
// - phone의 상태(properties) -> color, size
// - phone의 행동(methods) -> ring, take a picture, play music
// - 형식 { 키 : 값}

const user = {
  fullName: "Picaso",
  age: 30,
  email: "picaso@gmail.com",
  works: [
    { id: 1, title: "게르니카", price: 10000, like: 50 },
    { id: 2, title: "아비뇽의 처녀들", price: 30000, like: 80 },
    { id: 3, title: "우는 여인", price: 50000, like: 200 },
  ],
  login() {
    console.log("user loggid in.........");
  },
  logout() {
    console.log("user logged out........");
  },
  goodWorks() {
    console.log("피카소의 대표작");
    this.works.forEach((work) => {
      console.log(`${work.id}, ${work.title}, ${work.price}원, 좋아요(${work.like})`);
    });
  },
};

console.log(user.fullName);
user.login();
user.logout();
user.goodWorks();

console.log(user.age);

user.age = 45;
console.log(user.age);

console.clear();

// Math Object
console.log(Math);
console.log(Math.PI);

const sum = 9.7;
console.log(Math.round(sum));
console.log(Math.floor(sum));
console.log(Math.ceil(sum));
console.log(parseInt(sum));

// random number
const num = Math.random();
console.log(num);

// 0 ~ 9 사이의 정수출력 랜덤하게...
console.log(Math.floor(Math.random() * 10));

// 1 ~ 10 사이의 정수출력 랜덤하게...
console.log(Math.floor(Math.random() * 10) + 1);

// 배열 랜덤 출력
const food = ["라면", "김밥", "떡복기", "짬뽛", "국밥"];
const randomNum = Math.floor(Math.random() * food.length);
console.log(food[randomNum]);
