function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
// console.log(input);
// console.log(createBtn);
// console.log(destroyBtn);
function createBoxes(inputValue) {
  // console.log(inputValue);
  cleanerBoxes();
  let createDivBoxes = "";
  for (let i = 0; i < inputValue; i++) {
    createDivBoxes += `<div style="background-color: ${getRandomHexColor()}; 
    width: ${30 + i * 10}px; 
    height: ${30 + i * 10}px;"></div>`;
  }
  // console.log(createDivBoxes);
  return createDivBoxes;
}

function cleanerBoxes() {
  boxes.innerHTML = "";
}

function handlerCreate() {
  const inputValue = parseInt(input.value);
  // console.log(inputValue);
  if (inputValue >= 1 && inputValue <= 100) {
    // console.log("inputValue is true");
    boxes.insertAdjacentHTML("beforeend", createBoxes(inputValue));
    input.value = "";
    // console.dir(boxes);
  }
}

function handlerDestroy() {
  cleanerBoxes();
}
createBtn.addEventListener("click", handlerCreate);
destroyBtn.addEventListener("click", handlerDestroy);
