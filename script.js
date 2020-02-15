const sentence = document.querySelector("h1");

function getTheCharacters() {
  let characters = (sentence.textContent).split("");
  sentence.textContent = "";
  return characters
}

let counter = 0;
const arr = getTheCharacters()

function showText() {
  startAnimation(arr[counter])
}
showText()


function addAnoTherLetter() {
  counter++;
  showText()
}

function startAnimation(element) {
  const spanElement = document.createElement("span")
  spanElement.classList.add("animation")
  spanElement.textContent = element;

  spanElement.addEventListener("animationend", addAnoTherLetter)
  sentence.appendChild(spanElement);
}