function sort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let smallestindex = i;

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[smallestindex]){ 
                smallestindex = j
            }
        }

        [arr[i], arr[smallestindex]] = [arr[smallestindex], arr[i]];
    }

    return arr;
}


let arr1 = [5,7,2,4,1];
let arr2 = [4,5,2,3,1];

console.log(`Sorted array of ${arr1} =>`,sort(arr1));
console.log(`Sorted array of ${arr2} =>`,sort(arr2));