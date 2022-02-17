// Array 배열
// 1. 배열 만들기

const arr1 = new Array();
const arr2 = [1, "안녕", 5, 7, 9];
const arr3 = ["what", "are", "u", "doing", 100, true];
const arr4 = ["감사합니다", { model: "apple", price: 100 }, { model: "galaxy", price: 200 }];

console.log(arr4);
console.log(arr4[1].model);
console.log(arr2[1]);

// 2. 배열 출력
const books = ["html", "css", "javascript"];

console.log(books);
console.log(books.length);
console.log(books[0]);
console.log(books[books.length - 1]);

// 3. loop 출력
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
// }

// for (let item of books) {
//   console.log(item + " hello");
// }

// forEach문
books.forEach((item) => {
  console.log(item);
});

// 4. 추가, 삭제
// - 뒤에 추가
books.push("jquery");
console.log(books);

books.push("vue");
console.log(books);

// - 앞에 추가
books.unshift("react");
console.log(books);

// - 뒤에서 삭제
books.pop();
console.log(books);

// - 앞에서 삭제
books.shift();
console.log(books);

// -splice : 지정한 위치에서 삭제, 추가
books.splice(2, 1, "react", "vue");
console.log(books);

// - 두개의 배열을 합치기
const books2 = ["git", "nodejs"];
const newBooks = books.concat(books2);
console.log(newBooks);

// - 검색

console.log(newBooks.indexOf("vue"));
console.log(newBooks.includes("css"));
console.log(newBooks.includes("github"));
