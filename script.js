const sentence = document.querySelector("h1");

function getTheCharacters() {
  let characters = (sentence.textContent).split("");
  sentence.textContent = "";
  return characters
}


function showText() {
  const arr = getTheCharacters()
  arr.forEach(e => {
    const spanElement = document.createElement("span")
    spanElement.textContent = e;
    spanElement.classList.add("animation")
    sentence.appendChild(spanElement);
  })
}
showText()