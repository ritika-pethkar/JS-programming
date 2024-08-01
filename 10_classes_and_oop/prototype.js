let myName = "Ritika   "

let myHeros = ["Thor", "Ironman", "Hulk"]

let heroPower = {
    Thor : "Hammer",
    Ironman : "Suit",
    Hulk : "Strength",

    getThorPower : function(){
        console.log(`Thor's power is ${this.Thor}`);
    }
}

// spiderman() will be accessible from both heroPower and myHeros
Object.prototype.spiderMan = function(){
    console.log(`Spiderman is present in all objects`);
}

Array.prototype.heyHero = function(){
    console.log("Hero says Hello");
}


// heroPower.spiderMan()
myHeros.spiderMan()
myHeros.heyHero()
// heroPower.heyHero()

// ---------------------- Inheritance --------------------------
const user = {
    name : "Andy",
    email : "andy@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "JS - Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "UserOne         "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"HelloWorld".trueLength()
"Hey".trueLength()
