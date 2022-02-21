const numbers = document.querySelector(".numbers");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const list = document.querySelector(".list");
const dimm = document.querySelector(".dimm");

let lottoNumbers = [];
let lottoList = [];
let count = 10;

function checkGame() {
  count--;
  if (count <= 0) {
    dimm.classList.add("active");
    snackBar();
  }
}

function snackBar() {
  const snackbar = new SnackBar();
  snackbar.make(
    "message",
    [
      "안녕하세요",
      "",
      // vertical position
      "bottom",
      // horizontal position
      "center",
    ],
    null
  );

  snackbar.action(function () {
    snackbar.close();
    dimm.classList.remove("active");
    resetGame();
  });
}

function addList() {
  list.innerHTML = "";
  lottoList.push(lottoNumbers);

  lottoList.forEach((item) => {
    const p = document.createElement("p");

    item.forEach((num) => {
      const span = document.createElement("span");
      span.textContent = num;
      p.appendChild(span);
    });

    list.prepend(p);
  });
}

function paintNumber() {
  numbers.innerHTML = "";
  lottoNumbers.forEach((item) => {
    const div = document.createElement("div");
    div.innerText = item;
    numbers.appendChild(div);
  });
}

function startGame() {
  lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;

    if (lottoNumbers.indexOf(num) === -1) {
      lottoNumbers.push(num);
    }
  }
  paintNumber();
  addList();
  checkGame();
}

function resetGame() {
  count = 10;
  lottoNumbers = [];
  lottoList = [];
  list.innerHTML = "";

  while (lottoNumbers.length < 6) {
    lottoNumbers.push("?");
  }
  paintNumber();
}

function init() {
  start.addEventListener("click", startGame);
  reset.addEventListener("click", resetGame);
}

init();
