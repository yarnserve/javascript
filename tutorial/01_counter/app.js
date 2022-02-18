const price = document.querySelector(".price");
const count = document.querySelector(".count");
const sum = document.querySelector(".sum");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

const init_Price = 15000;
let num = 1;

price.textContent = init_Price;
count.textContent = num;
sum.textContent = init_Price * num;

plus.addEventListener("click", function () {
  num++;
  sum.textContent = init_Price * num;
  count.textContent = num;
});

minus.addEventListener("click", function () {
  num--;
  sum.textContent = init_Price * num;
  count.textContent = num;
});

reset.addEventListener("click", function () {
  num = 1;
  sum.textContent = init_Price * num;
  count.textContent = num;
});
