const timer = document.getElementById('timer')

const quoteInputElement = document.getElementById('quoteInput')
const quoteDisplayElement = document.getElementById('quoteDisplay')


//add eventlister at input elemet
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    let correct = true

    arrayQuote.forEach((characterSpan, index) =>{
        const char = arrayValue[index]
        console.log(char)
        if(char == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if(char === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }

    })

    if (correct)
    randomText()
})

//generate random quote
async function getRandomQuote(){
    const apiUrl = 'https://api.quotable.io/random'
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.content

}

//create span for each character
async function randomText(){
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML=''
    quote.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    timerStart()
}

let startTime = 0

function timerStart(){
    timer.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000);
}

function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}

randomText()

