// method in js to create the array
let arr = [1,2,3];
console.log(arr);

console.log("----------------------------------");
// array method in js

// 1
console.log("Length of array is: " + arr.length); //length method used for checking the length of array

// 2
console.log("change the values into strings: ", typeof(arr.toString())); // make the arr elements string

// 3
console.log("Check the element in: ", arr.includes(2)); // check the element in array

// 4
console.log("Join the elements with - : ", arr.join(" ")); // join the elements with any separator

// 5
arr.push(4); // add the element at last
console.log("After push the element: ", arr);

// 6
arr.pop();
// remove the last element
console.log("After pop the element: ", arr);

// 7
arr.unshift(0);
// add the element at first
console.log("After unshift the element: ", arr);

// 8
arr.shift();
// remove the first element
console.log("After shift the element: ", arr);

// 9
arr.sort();
// sort the array
console.log("After sorting the array: ", arr);

// 10 
console.log("Element at index 1 is: ", arr.at(1)); // element at specific index

// 11 concat
let arr2 = [4,5,6];
let newArr = arr.concat(arr2); // concatenate two arrays
console.log("After concatenation: ", newArr);

// 12 slice
let slicedArr = newArr.slice(1,4);
console.log("Sliced array: ", slicedArr);

// 13 indexOf
console.log("Index of element 3 is: ", newArr.indexOf(3));
// find the index of element

// 14 reverse
newArr.reverse();
console.log("Reversed array: ", newArr);


console.log("----------------------------------");

// Array iteration methods in javascript

let numbers = [1,2,3,4,5];

// forEach

numbers.forEach((num) => {
    console.log("forEach element: ", num);
});

// map

let squaredNumbers = numbers.map((num) => num * num);
console.log("Mapped squared numbers: ", squaredNumbers);

// filter

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Filtered even numbers: ", evenNumbers);

// reduce

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Reduced sum of numbers: ", sum);

// find

let foundNumber = numbers.find((num) => num > 3);
console.log("Found number greater than 3: ", foundNumber);

// some

let hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log("Array has even number: ", hasEvenNumber);

// every

let allPositive = numbers.every((num) => num > 0);
console.log("All numbers are positive: ", allPositive);

// rest

let [first, ...rest] = numbers;
console.log("First element: ", first);
console.log("Rest of the elements: ", rest);

// entries

let entries = numbers.entries();
for (let [index, value] of entries) {
    console.log(`Index: ${index}, Value: ${value}`);
}

// keys

let keys = numbers.keys();
for (let key of keys) {
    console.log("Key: ", key);
}

// from

let str = "12345";
let strArray = Array.from(str);
console.log("Array from string: ", strArray);

console.log("----------------------------------");