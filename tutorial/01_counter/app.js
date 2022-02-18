const price = document.querySelector(".price");
const count = document.querySelector(".count");
const sum = document.querySelector(".sum");
const btns = document.querySelectorAll("button");

const init_Price = 15000;
let num = 1;

price.textContent = init_Price;
count.textContent = num;
sum.textContent = init_Price * num;

function printTotalPrice() {
  sum.textContent = init_Price * num;
  count.textContent = num;
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.className === "plus") {
      num++;
      printTotalPrice();
    } else if (e.target.className === "minus") {
      num--;
      if (num <= 1) num = 1;
      printTotalPrice();
    } else {
      num = 1;
      printTotalPrice();
    }
  });
});
