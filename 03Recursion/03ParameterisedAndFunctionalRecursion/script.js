function ParamterisedRecursion(n, sum){
    if(n == 0){
        console.log(sum);
        return;
    }

    ParamterisedRecursion(n-1, sum+n);
}

ParamterisedRecursion(5,0)

function FunctionRecursion(n){
    if(n == 0) return 0;
    return n + FunctionRecursion(n-1);
}

console.log(FunctionRecursion(5));