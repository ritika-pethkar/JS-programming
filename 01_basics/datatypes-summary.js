/*
On the basis of how data is accessed  and stored in memory, 
datatypes are categorized into two types primitive and non-primitive 
Dynamically Typed language
typeof() is used to check datatype of a variable
*/

/*
--> PRIMITIVE [ Call by value]
    7 types : String, Number, Boolean, null => object, undefined => object, Symbol => symbol, BigInt => bigint
*/
const score = 100  // number
const scoreVal = 99.8 // number

const isLoggedIn = false
const outsideTemp = null

let userEmail; // undefined
const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId);

const bigNumber = 346577364748848398438493932832932389n

/*
--> NON-PRIMITIVE [Reference Type]
    Array => object, Object => object, Function => function
    their type is object
*/
const heros = ["Iron Man", "Captain America", "Hulk", "Thor"]; // Array

let myObj = {
    name: "Ritika",
    age: 20
}

const myFun = function(){
    console.log("hello world")
}

// console.log(typeof myFun)

// ---------------------- Memory Type in Javascript----------------------

//Stack(Primitive) => copy of object , Heap(Non-Primitive) => Reference of object

/*
anotherName contains copy of myName not the original one,
that is why when we change anotherName myName will not be affected
*/

let myName = "Ritika"
let anotherName = myName
anotherName = "Somya"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl.com"
}

let userTwo = userOne // this will point to the same original userOne object
userTwo.email = "ritika@google.com" // it will also change userOne's email 

console.log("userTwo -", userTwo.email);
console.log("userOne -",userOne.email);

