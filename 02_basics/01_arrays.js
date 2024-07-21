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
/*
console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3) // manipulates the original array
console.log("C ", myArr);
console.log(myN2);
*/

const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) 
// console.log(marvel_heros); // append whole dc_heros as list at the end of marvel_heros

const all_heros = marvel_heros.concat(dc_heros) 
// concat combines two arrays and returns a new list
// console.log(all_heros);

const allNewHeros = [...marvel_heros, ...dc_heros] // spread operator 
//console.log(allNewHeros);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArray = arr.flat(Infinity) // spread out values
console.log(realArray);

console.log(Array.isArray("Ritika")) // false
console.log(Array.from("Ritika")) // convert this to array
console.log(Array.from({name: "Ritika"})) // gives empty array, we have to tell about array of keys or values
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 )); //return a new array