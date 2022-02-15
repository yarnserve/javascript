// 반복문
// 조건이 참일 때 실행

// while문
let i = 5;
while (i > 0) {
  console.log(`i는 ${i}`);
  i--;
}

//for문

for (let j = 3; j > 0; j--) {
  console.log(j);
}

for (let k = 1; k <= 10; k++) {
  console.log(k);
}

const day = ["월", "화", "수", "목", "금"];

for (let index = 0; index < day.length; index++) {
  console.log(day[index]);
}

// 0 ~ 10 -> 홀수만 출력
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
