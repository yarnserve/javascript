import { movies } from "./data.js";

console.log(movies);

const poster = document.getElementById("poster");
const num = document.getElementById("num");
const title = document.getElementById("title");
const director = document.getElementById("director");
const info = document.getElementById("info");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function nextMoveiShow() {
  currentIndex++;
  if (currentIndex > movies.length - 1) {
    currentIndex = 0;
  }
  showMovie();
}

function prevMoveiShow() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = movies.length - 1;
  }
  showMovie();
}

function showMovie() {
  const item = movies[currentIndex];
  poster.src = item.poster;
  num.textContent = item.id;
  title.textContent = item.title;
  director.textContent = item.director;
  info.textContent = item.text;
}

function init() {
  showMovie();
  next.addEventListener("click", nextMoveiShow);
  prev.addEventListener("click", prevMoveiShow);

  console.log(movies.length);
}

init();
