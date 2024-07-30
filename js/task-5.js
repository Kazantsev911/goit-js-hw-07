const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
function handlerclick(event) {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}
buttonColor.addEventListener("click", handlerclick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
