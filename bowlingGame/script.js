const game = (rolls) =>{

    let score = 0; 
    let rollIndex = 0;
    const fram = {}

    for(let frameIndex = 1; frameIndex <= 10; frameIndex++){
        // console.log(rolls[rollIndex])
        // strike
        if(rolls[rollIndex] === 10){
            score+=10 +rolls[rollIndex+1]+rolls[rollIndex+2]
            rollIndex++;
            fram[frameIndex] = [10, rolls[rollIndex], rolls[rollIndex]]
        }else{
            //spere
            let frameScore = rolls[rollIndex]+rolls[rollIndex+1]
            if(frameScore===10){
                 score += 10+rolls[rollIndex+2]
                 fram[frameIndex] = [rolls[rollIndex],rolls[rollIndex+1],rolls[rollIndex+2]]
            }else{
                //norrmal
                fram[frameIndex] = [rolls[rollIndex],rolls[rollIndex+1]]
                score+=frameScore
            }
            rollIndex+=2
        }
       
    }
    // console.log(score)rety

    return{score, fram}
}


const rolls =[10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,0,5,2,];



//[10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]
const fram = {}
console.log(game(rolls), fram)