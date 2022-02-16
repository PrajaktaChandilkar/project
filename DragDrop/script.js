const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("dragstart has been triggered");
  // e.preventDefault()
  e.target.className += " hold";

  setTimeout(() => {
    e.target.className = "hide";
  }, 0);

  // e.target.className = 'imgBox'
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
  console.log("dragend has been triggered");
});

for (singleBox of whiteBoxes) {
  singleBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover has been triggered");
  });
  singleBox.addEventListener("dragenter", (e) => {
      e.target.className += ' dash'
    console.log("dragenter has been triggered");
  });
  singleBox.addEventListener("dragleave", (e) => {
    e.target.className = 'whiteBox'
    console.log("dragleave has been triggered");
  });
  singleBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
    console.log("dragdrop has been triggered");
  });
}