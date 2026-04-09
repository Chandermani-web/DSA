// Write prefix sum code without seeing
let arr = [1,2,3,4,5,6,7,8,9,10];
let prefix = [];

prefix[0] = arr[0];

for(let i = 1; i < arr.length; i++){
    prefix[i] = prefix[i-1] + arr[i];
}

// console.log(prefix);

// Find sum of subarray from index 2 to 5
let L = 2;
let R = 5;

let sum;

if (L === 0) {
    sum = prefix[R];
} else {
    sum = prefix[R] - prefix[L - 1];
}

// console.log(sum);



// Find how many subarray have sum = 6
let arr1 = [1, 2, 3, 3];
let map = new Map();

let sum1 = 0;
let count = 0;

map.set(0, 1); // very important

for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];

    if (map.has(sum1 - 6)) {
        count += map.get(sum1 - 6);
    }

    map.set(sum1, (map.get(sum1) || 0) + 1);
    console.log(map);
}

console.log(count);