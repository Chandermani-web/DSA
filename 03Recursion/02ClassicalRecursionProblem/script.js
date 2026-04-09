// fibonacci series
function fibonacci(n){
    if(n == 1 || n == 0){
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6));

// check if the array is sorted or not
function isArraySorted(arr,n){
    
    if(n == 0 || n == 1) return true;

    return arr[n-1] >= arr[n-2] && isArraySorted(arr,n-1);
}

console.log("Array is Sorted: ",isArraySorted([1,2,3,4,5], 5));
console.log("Array is Sorted: ",isArraySorted([1,2,8,4,5], 5));