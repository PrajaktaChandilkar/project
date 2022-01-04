function palindrome(string){
    const strLength = string.length;
    //convert all the character in lowercase
    string = string.toLowerCase()
    let i,j;
    for (i = 0; i < strLength; i++){
        if (string[i] !== string[strLength - 1 - i]){
            return false
        }
        else
        return true
    }
    
}

const string = prompt("enter a string")
var res = palindrome(string);
console.log(res)