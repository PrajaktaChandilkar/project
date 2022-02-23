const userInput = document.getElementById("input");

// const displayBlock = document.getElementById("displayBlock");
const inputArray = document.querySelector(".letterArray")

userInput.addEventListener("input", function () {
  // console.log('hi')

  const name = this.value;
  console.log(this.value);

  let nameValue = name.split("");
  inputArray.innerHTML = ''
  nameValue.forEach((character) => {

    const charEl = document.createElement("span")
    charEl.classList.add("nextLetter")
    charEl.innerHTML= `${character}`
    inputArray.appendChild(charEl)
    console.log(charEl)
    
  });
});
