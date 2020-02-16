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


function addAnoTherLetter() {
  counter++;
  if (counter <= arr.length - 1) {
    showText()
  } else {
    sentence.classList.add("rotateElment");
    console.log(arr);
    let a = sentence.textContent;
    // sentence.textContent = `${a.charAt(0).toLowerCase()}${a.substring(1, a.length - 1)}${a.charAt(a.length - 1).toUpperCase()}`
    setTimeout(() => {
      document.querySelectorAll("span").forEach(e => {
        e.classList.remove("animation");
        e.classList.add("rotateElment")
      })
    }, 2000);
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