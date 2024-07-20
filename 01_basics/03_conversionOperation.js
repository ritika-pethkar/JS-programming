let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  
/*
1. "33abc" = NaN => special type Not a Number
2. null => 0
3. undefined => NaN
4. true => 1
5. "Ritika" => NaN
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
0 => false; 1 => true
"" => false
"AnyString" => true
*/

// let num = 17
// let stringNum = String(num)
// console.log(stringNum)
// console.log(typeof stringNum)

// ***************************** Operations ************************************
let value = 3
let negValue = -value
//console.log(negValue) // -3

/*
console.log(2+2)  => Addition
console.log(2-2)  => Substraction
console.log(2*2)  => Multiplication
console.log(2**3) => Exponentiation
console.log(2/3)  => Division
console.log(2%3)  => Modulous
*/

let str1 = "Hello!"
let str2 = " Somya"
let str3 = str1 + str2

/*
console.log(str3);

console.log("1" + 2 + 2);   // 122
console.log(1 + "2");       // 12
console.log(1 + 2 + "2");   // 32
console.log((3 + 4) * 5 % 3); // 2
*/

// console.log(+true) // 1
// console.log(+"") // 0

let n1, n2, n3
n1 = n2 = n3 = 2+2

let gameCounter = 100
gameCounter++ // first assign then increment
// ++gameCounter => first increment then assign 
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion