const bgBtn = document.getElementById("bgBtn");
const hexBtn = document.getElementById("hexBtn");
const color = document.querySelector(".color");

const bg = ["orange", "blue", "red", "black", "yellow", "green"];

bgBtn.addEventListener("click", () => {
  const randomBgNumber = Math.floor(Math.random() * bg.length);
  document.body.style.backgroundColor = bg[randomBgNumber];
  color.textContent = bg[randomBgNumber];
});

hexBtn.addEventListener("click", () => {
  console.log("Hex.....");
});
