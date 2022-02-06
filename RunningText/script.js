const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "We love Programming! "

//
let idx = 0

//initiase consta speed 500
const NUM = 500

//calculate the time by cosnt num and speeed
let time = NUM/speedEl.value

writeText()

function writeText(){
    //print one one index after time seconds
    textEl.innerHTML = text.slice(0, idx)

    idx++;
    if (idx > text.length){
        idx=1
    }

    setTimeout(writeText, time)
}

speedEl.addEventListener("input", (e) => {time = NUM/ e.target.value})