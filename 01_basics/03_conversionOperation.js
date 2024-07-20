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

let num = 17
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)
