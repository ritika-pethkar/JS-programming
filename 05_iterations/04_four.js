const myObject = {
    Js : "Javascript",
    Cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["Js", "rb", "java", "C++", "Python"]

for (const key in programming) {
    // console.log(`${key} :- ${programming[key]}`); // It will return indexes
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }  Map is not iterable