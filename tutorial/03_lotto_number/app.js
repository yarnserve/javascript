const numbers = document.querySelector(".numbers");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

const lottoNumbers = [];

function startGame() {
  const num = Math.floor(Math.random() * 45) + 1;
  lottoNumbers.push(num);
  console.log(lottoNumbers);
}

function resetGame() {
  console.log("reset....");
}

function init() {
  start.addEventListener("click", startGame);
  reset.addEventListener("click", resetGame);
}

init();
