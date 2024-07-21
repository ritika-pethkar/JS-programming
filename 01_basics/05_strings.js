const name = "Ritika"

//console.log("Hello " + name);
console.log(`Hello My Name is ${name}`); // Sring interpolation better way

const gameName = new String('Ritika-rp-com') 
console.log(gameName.__proto__);    // {'P', 'U', 'N', 'E'} object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,6) // here, we can't pass -ve values
// console.log(newString );

const anotherString = gameName.slice(6,9) 
console.log(anotherString); // -rp

const s1 = "    Ritika    " 
console.log(s1)
console.log(s1.trim()) // works on white space characters

const url = "https://ritika.com/ritika%20pethkar"
console.log(url.replace('%20', '-'));
console.log(url.includes('ritika'));

console.log(gameName.split('-')) // converts into array


