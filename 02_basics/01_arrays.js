/* 
Arrays - collection of multiple items of different datatypes in single variable
array copy operation creates shallow copies[which shares the same reference point]
*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Captain America", "Hulk", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[0]);

// Array Methods
/*
myArr.push(6); // appends the element to the last
myArr.push(7);
myArr.pop();  // removes the last element 
*/
// myArr.unshift(9) // inserts new element at the start of the array
// myArr.shift()  // removes the first element from an array and returns it

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(4)); 

/*
const newArr = myArr.join() // changes the type to string
console.log(myArr); 
console.log(newArr); 
*/

// slice, splice

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3) // manipulates the original array
console.log("C ", myArr);
console.log(myN2);


