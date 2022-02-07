const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const buttonEl = document.querySelector("#btn");
const colorEl = document.querySelector(".color");

buttonEl.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
