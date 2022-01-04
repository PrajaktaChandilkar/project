function threeSum(arr, target){
    closeSum = Number.MAX_VALUE;
    console.log(closeSum);
    let len = arr.length;

    for(let i = 0; i < len; i++){
        for(let j = i +  1; j < len; j++){
            for(k = j + 1; k < len; k++){
                maxSum = arr[i] + arr[j] + arr[k];
                if (Math.abs(maxSum - target ) < Math.abs(closeSum - target)){
                    closeSum = maxSum;
                }
            }
        }
    }
return closeSum;
}
console.log(threeSum ([-1, 2, 1, -4], 1));