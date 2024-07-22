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