function sort(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

let arr1 = [5,7,2,4,1];
let arr2 = [4,5,2,3,1];

console.log(`Sorted array of ${arr1} =>`,sort(arr1));
console.log(`Sorted array of ${arr2} =>`,sort(arr2));