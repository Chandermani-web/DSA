// Sum of first n natural numbers using recursion
function sum(num){
    if(num == 0) return 0;
    return num + sum(num - 1);
}

console.log(sum(5));

// Sum of elements in an array using recursion
function sumOfArr(arr){
    if (arr.length === 0) return 0;

    let last = arr[arr.length - 1];
    let remainingArr = arr.slice(0, arr.length - 1);

    return last + sumOfArr(remainingArr);
}

console.log(sumOfArr([1,2,3,4,5])); // 15

// Factorial of a number using recursion
function factorial(num){
    if(num == 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// Fibonacci series using recursion
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8