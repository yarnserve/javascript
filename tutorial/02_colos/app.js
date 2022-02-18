const bgBtn = document.getElementById("bgBtn");
const hexBtn = document.getElementById("hexBtn");
const color = document.querySelector(".color");
const bg = ["orange", "blue", "red", "black", "yellow", "green"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function getBgNum() {
  return Math.floor(Math.random() * bg.length); // 0 ~ 5
}

function getHexNum() {
  return Math.floor(Math.random() * hex.length); // 0 ~ 15
}

bgBtn.addEventListener("click", () => {
  const randomBgNumber = getBgNum();
  document.body.style.backgroundColor = bg[randomBgNumber];
  color.textContent = bg[randomBgNumber];
});

hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexNumber = getHexNum();
    hexColor = hexColor + hex[randomHexNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
