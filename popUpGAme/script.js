const container = document.querySelector('.balloon-container')

numberOfBalloons = 25
let popped = 0
console.log('hii')
for(let i = 0; i < numberOfBalloons; i++){
    const divEl = document.createElement('div')

    divEl.classList.add('balloon')

    const getRandColor = getColor()
    divEl.innerHTML = "POP!"
    divEl.style.textAlign="center"
    divEl.style.backgroundColor = `${getRandColor}`
    divEl.style.color=`${getRandColor}`
    container.appendChild(divEl)
    divEl.addEventListener("mouseenter", function(){

        if(divEl.style.backgroundColor != "transparent"){
            popped++
        }
        console.log(popped)
        divEl.style.backgroundColor = "transparent "
        checkAllPopped()
    })

}

function checkAllPopped(){
    if(popped === 25){
        console.log("popped")
        let message = document.querySelector('.zero-balloon')
        message.style.display = "block"
        container.innerHTML = ''
    }
}

function getColor(){
    function color(){
        let hex = random(255).toString(16)
        return hex.padStart(2,'0')
    }
    return "#"+color()+color()+color()
}

function random(number){
    let val = Math.floor(Math.random()*number)
    return val
}