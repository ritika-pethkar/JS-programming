// Dates
let myDate = new Date() // type -> object
/*
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
*/

// let myCreatedDate = new Date(2023,0,23) // (yyyy-mm-dd)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("07-21-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // miliseconds -> seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.toLocaleString('default',{
    weekday : "long",
}));