function convertToRoman(num) {
    const symbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    //your code here
    var str = '';
    for(var i of Object.keys(symbols)){
        var q = Math.floor(num/symbols[i]);
        num -=  q * symbols[i]
        str += i.repeat(q)
    }

return str
}

    // for(var i of  Object.keys(symbols)){
    //     // console.log(symbols[i])
    //     if (symbols[i] < num){
    //         console.log([i])
    //     }
    //     // if (num - symbols[i] >= num){
    //     //     num = num - symbols[i]
    //     //     str += i.repeat(num)
    //     // }
        
        
    
  console.log(convertToRoman(798))
//   console.log('bhj')