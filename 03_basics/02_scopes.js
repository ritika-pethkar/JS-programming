// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
   // console.log("Inner a:", a);
}
// let and const are limited within a scope
// Browser's scope is different than the scope in node

// console.log(a);
// console.log(b);
// console.log(c);

// ------------- Nested Scope -------------
function one(){
    const username = "Sam"
    function two(){
        const website ="youTube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();
if(true){
    const username = "Joey"
    if(username === "Joey"){
        const website = " youTube"
        // console.log(username + website);
    }
    // console.log(website); -- error 1 
}
// console.log(username); -- error 2

//---------------------- Interesting ---------------------
console.log(addOne(5));
function addOne(num){
    return num + 1;
}

console.log(addTwo(5)); // -- error if you access it before variable
const addTwo = function (num) {
    return num + 2;
}
