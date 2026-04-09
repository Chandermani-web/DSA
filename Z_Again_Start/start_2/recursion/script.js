// Recursion
function recursion(n){
    if(n == 0) return 0; //Base Case
    console.log(n);
    recursion(n-1);
    console.log(n);
}

// console.log(recursion(4));


/** types of Recursion 
 * 1. Linear recursion
 * 2. Tree recursion
 * 3. Tail recursion
*/

// Ḷinear Recursion
function sum(n){
    if(n === 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(4));