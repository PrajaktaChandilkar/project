console.log('hi')
let arr = [1,2,3,3,4,5,2]
console.log(arr.length)
let arr1=[]
//  arr1 = arr.forEach(element => {
//    if (element % 2 !==0){
//        arr1.push(element)   
//    }
//    console.log(arr1)
//    arr
// });
arr1.filter((element) => element%2 === true)
console.log(arr1)