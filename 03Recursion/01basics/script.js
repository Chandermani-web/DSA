// print name n times
function printName(name,n){
    if(n === 0) return;
    console.log(`Hello ${name}`);
    printName(name, n - 1)
}

printName("Chandermani", 4);

// print number n to 1
function print(n){
    if(n === 0){
        console.log("Print func() end\n");
        return;
    }
    console.log(n);
    print(n-1)
}

console.log("Print func() start")
print(4);   

// N Factorial
function factorial(n){
    if(n == 0) return 1;
    return n * factorial(n-1);
}

console.log("Factorial of 4: ",factorial(4));

// Sum of n number
function sum(n){
    if(n == 0) return 1;
    return n + sum(n-1);
}

console.log("Sum of 4: ",sum(4));

