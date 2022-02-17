const books = ["html", "css", "javascript"];

// 1. 배열을 문자열로 만들기
console.log(books);
{
  const result = books.join("/");
  console.log(result);
}

// 2. 문자열을 배열로 만들기
{
  const book2 = "react, vue, angular";
  const result = book2.split(",");
  console.log(result);
}

// 3. 배열을 반대로 만들기
{
  const numbers = [1, 3, 5, 7, 9];
  console.log(numbers);
  const result = numbers.reverse();
  console.log(numbers);
}

// 4. 특정한 요소를 제거한 새로운 배열 만들기
{
  const numbers = [1, 2, 5, 7, 9];
  console.log(numbers);
  const result = numbers.splice(3);
  console.log(result);
}

console.clear();

// 소주
const sojus = [
  { name: "대선", price: 1200, sale: true, score: 86 },
  { name: "좋은데이", price: 1100, sale: false, score: 92 },
  { name: "진로", price: 1150, sale: true, score: 80 },
  { name: "금복주", price: 960, sale: false, score: 60 },
  { name: "참이슬", price: 1250, sale: true, score: 46 },
];

// 5. score가 80인 소주를 찾기
{
  const result = sojus.find((item) => item.score === 80);
  console.log(result.name);
}
// 6. 판매중인 소주를 찾아서 새로운 배열로 만들기
{
  const result = sojus.filter((item) => item.sale);
  console.log(result);
}

// 7. 점수(score)만 있는 새로운 배열 만들기
{
  const result = sojus.map((item) => item.name);
  console.log(result);
}

// 8. 점수가 50보다 작은 소주가 있는지 확인하기
{
  const result = sojus.some((item) => item.score < 30);
  console.log(result);
}
