function findMejority(num, n){

    let requiredFrequnecy = Math.floor(n/2)
    // console.log(requiredFrequnecy)
    let store = {} //object
    for(let i = 0; i < n; i++){
        if((store[num[i]]) !== undefined){
            store[num[i]]++;
        }else{
            store[num[i]]=1
        }
        
        if(store[num[i]] > requiredFrequnecy){
            console.log(store)
            return num[i]      
        }
    }
    // let count=0;
    // for(let i = 0; i < n; i++){
      
    //     for(let j = i; j <= n; j++){
    //         if(arr[i] === arr[j]){
    //             count++;
    //         }
    //     }
        
    // }
    // return count;
   
}
let arr = [2,3,2,3,2,3,2] 
n = arr.length
// console.log(findMejority([1,2,3,2,1,2,2,3,2]))
// console.log(arr)
console.log(findMejority(arr, n))