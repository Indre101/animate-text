const sentence = document.querySelector("h1");
document.querySelector(".container").style.setProperty("--length", (sentence.textContent).length)

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

const ranDelay = () => Math.floor((Math.random() * 5) + 0.5)

function addAnoTherLetter() {
  counter++;
  if (counter <= arr.length - 1) {
    showText()
  } else {
    sentence.classList.add("rotateElment");
    document.querySelectorAll("span").forEach(e => {
      e.classList.remove("animation")
      e.style.setProperty("--delay", ranDelay())
      e.classList.add("rotateAndColor")
    })
  }
}

function startAnimation(element) {
  const spanElement = document.createElement("span")
  spanElement.classList.add("animation")
  spanElement.textContent = element;
  spanElement.addEventListener("animationend", addAnoTherLetter)
  if (element === " ") {
    sentence.textContent += " ";
  }
  sentence.appendChild(spanElement);
}