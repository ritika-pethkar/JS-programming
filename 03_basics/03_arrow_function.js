// this -> current context
const user ={
    username : "Jane",
    fee : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Sam" // current context
// user.welcomeMessage()

// console.log(this); // in node environment

/*
function fun(){
    let username = "Harry"
    console.log(this.username);
}
fun()
*/

/* const fun1 = function(){
    let username = "Harry"
    console.log(this.username);
}*/

const fun2 = () => {
    let username = "Harry"
    console.log(this);
}
// fun2()

/*const add = (num1, num2) => {
    return num1 + num2;
}*/ 

// const add = (num1, num2) => num1 + num2;  // implicit return

// const add = (num1, num2) => (num1 + num2);

const add = (num1, num2) => ({username: "jane"});

console.log(add(5, 10));

// const arr = [2, 4, 6, 8]
// arr.forEach()

