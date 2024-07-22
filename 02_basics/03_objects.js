// singleton
// Object.create()

const mySym = Symbol("key1")

// object literals
const jsUser = {
    name : "Ritika",
    "fullName" : "Ritika Pethkar", // cannot be accessed using '.'
    [mySym] : "myKey1", // use [] to use mySym as symbol
    age : 20,
    email : "ritika@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]    
}

// Accessing objects
/*
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);
*/

jsUser.email = "rp123@google.com"
// Object.freeze(jsUser) // locks the object
jsUser.email = "rp123@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
// console.log(jsUser.greeting); // gives reference of function
console.log(jsUser.greetingTwo()); 
