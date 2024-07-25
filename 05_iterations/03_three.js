// for of loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
   //console.log(val); 
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " ") break
    // console.log(`Each char is : ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':- ', value)
}

const myObject = {
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value)
// }  NOT Iterable