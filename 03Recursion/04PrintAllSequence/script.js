function subSequence(arr, ans, index){
    if(index === arr.length){
        console.log(ans);
        return;
    }
    
    // include
    ans.push(arr[index]);
    subSequence(arr, ans, index + 1);
    ans.pop();

    // exclude
    subSequence(arr, ans, index + 1);
}


let ans = [];
subSequence([1,2,3], ans, 0);
