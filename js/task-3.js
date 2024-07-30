const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", handlerinput);

function handlerinput(event) {
  const inputValue = inputName.value.trim();

  if (inputValue) {
    outputName.textContent = event.currentTarget.value.trim();
  } else {
    outputName.textContent = "Anonymous";
  }
}
