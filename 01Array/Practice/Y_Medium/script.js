let arr = ["Hello","I","am","a","developer"];

let string = "";
for(let i = 0; i < arr.length; i++){
    string += arr[i] + " ";
}
console.log(string);


let reverseWordString = "";
for(let i = 0; i < arr.length; i++){
    let word = arr[i];
    let reversedWord = "";
    for(let j = word.length - 1; j >= 0; j--){
        reversedWord += word[j];
    }
    reverseWordString += reversedWord + " ";
}
console.log(reverseWordString);