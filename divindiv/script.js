const circle = document.querySelector(".circle");

const range = document.querySelector("#range");
console.log(range);

range.addEventListener("change", () => {
  console.log(range.value);
  let maxCount = range.value;
//   var randomColor = Math.floor(Math.random() * 10) + 1 
  let getRandColor = getColor()
//   const 
  let prevDiv = circle;
  circle.style.backgroundColor = `${getRandColor}`;
  for (let i = 0; i < maxCount; i++) {
    let getRandColor = getColor()
    const smallDiv = document.createElement("div");
    smallDiv.classList.add("innerCircle");
    smallDiv.style.backgroundColor = `${getRandColor}`;
    prevDiv.appendChild(smallDiv);
    prevDiv = smallDiv;
  }
});

function getColor(){
    // function color(){
    //     let hex = random(255).toString(16)
    //     return hex.padStart(2,'0')
    // }
    // return "#"+color()+color()+color()
    // //with rgb
    return `rgb(${random(255)},${random(255)},${random(255)})`
}

function random(number){
    let val = Math.floor(Math.random()*number)
    return val
}