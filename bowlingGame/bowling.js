function bowlingGame(eachRollScore) {
  let totalScore = 0;
  let rollsIndex = 0;

  for (let frameIndex = 1; frameIndex <= 10; frameIndex++) {
    //strike
    if (eachRollScore[rollsIndex] === 10) {
      totalScore +=10 + eachRollScore[rollsIndex + 1] + eachRollScore[rollsIndex + 2];
      // console.log(eachRollScore[rollsIndex])
      rollsIndex++;
    } else {
      let frameScore = eachRollScore[rollsIndex] + eachRollScore[rollsIndex + 1];
      //spear
      if (frameScore === 10) {
        totalScore += frameScore + eachRollScore[rollsIndex + 2];
      } else {
        //normal
        totalScore += frameScore;
      }

      //increamnet 2 because we are adding 2 index in framscore each fram has two chances
      rollsIndex += 2;
    }
  }
  // console.log(totalScore)
  return totalScore;
}

const eachRollScore = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]
//[10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,0,5,2,];
console.log(bowlingGame(eachRollScore));
