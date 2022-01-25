const change = document.getElementById("change_button")
const reset = document.getElementById("reset_button")

reset.addEventListener("click", gridReset)
change.addEventListener("click", changeColour)

function gridReset(){
    for(let i = 1; i < 9; i++){
        const gridItem = document.getElementById(i)
        gridItem.style.backgroundColor = "transparent"
    }
}

function changeColour(){
  
    const blockId = document.getElementById("block_id")
    const colorId = document.getElementById("colour_id")
    gridReset()
    const gridItem = document.getElementById(blockId.value)
    gridItem.style.backgroundColor = colorId.value

    blockId.value=""
    colorId.value=""
}

