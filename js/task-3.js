const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const textOutput = document.querySelector("h1");
textOutput.classList.add("text-output");
console.log(textOutput);
inputName.addEventListener("input", handlerinput);

function handlerinput(event) {
  const inputValue = inputName.value.trim();

  if (inputValue) {
    outputName.textContent = event.currentTarget.value.trim();
  } else {
    outputName.textContent = "Anonymous";
  }
}
