const colors = ["red", "green", "#bbb"];
const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector("#btn");

buttonEl.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorEl.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
