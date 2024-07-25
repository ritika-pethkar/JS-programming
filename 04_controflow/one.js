// ------------------- If Statement -----------------------
const isUserLoggedin = true;
const temperature = 41
/*
if(temperature === 40){
    console.log("less than 50");
}
else{
    console.log("temperature greater than 50");
}
console.log("Execute");
*/
// comparisons -> < , <= , > , >= , == , != , === [for strict type checking], !==
// var scope is global

/*
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power : ${power}`);
}

console.log(`User Power : ${power}`);
*/

const balance = 1000
// if(balance > 500) console.log("Executed"), console.log("Executed again");

// ---------------------- Nesting ------------------------
/* if(balance < 500){
    console.log("balance less than 500");
}else if(balance < 750){
    console.log("balance is less than 750");
}
else if(balance < 900){
    console.log("balance is less than 900");
}
else{
    console.log("balance is less than 1200");
} */

const userLoggedin = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(userLoggedin && debitCard && 2 == 3){
    console.log("Allowed to buy courses");
}

if(loggedinFromEmail || loggedinFromGoogle){
    console.log("User Logged in");
}


