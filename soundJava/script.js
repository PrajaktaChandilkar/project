const sounds = ["applease", "boo", "gasp", "tada", "victory","wrong"];
const buttons = Array.from(document.querySelectorAll(".btn")) 


for(var i = 0; i < buttons.length; i++){
    var eachButton = buttons[i];
    playSound(eachButton)

}

function playSound(btn){
    btn.addEventListener("click", function(){
        stopSounds()
        document.getElementById(btn.innerText).play()
    })
}

// function stopSound(){
//      for(var i = 0; i<sounds.length ; i++){
//         console.log(sounds[i])
//           const sound = document.getElementById(sounds[i])
         
//           sound.pause()
//           sound.currentTime = 0
//      }
// }

function stopSounds(){
    for (var i = 0; i < buttons.length-1; i++ ){
        const sound = document.getElementById(buttons[i].innerText)
        sound.pause()
        sound.currentTime=0

    }
}

// const sounds = ["applause","boo","gasp","tada","victory","wrong"]

// const btnsxyz = Array.from(document.querySelectorAll(".btn"))

// function stopSounds(){
//     for(var i=0;i<sounds.length;i++){

//         const sound = document.getElementById(sounds[i])
//         sound.pause()

//         sound.currentTime = 0
//     } 
// }
// function playSound(btn){
//     btn.addEventListener("click",function(){
//         stopSounds()

//         document.getElementById(btn.innerText).play()
//     })
//     // Stop sounds
//     // Play this sound

// }
// for(var i=0;i<btnsxyz.length;i++){
//     var buttonxyz = btnsxyz[i]

//     playSound(buttonxyz)
// }