function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
    console.log("A");
}
// sayMyName -> reference
// sayMyName();

/*
input in function defination -> parameters, 
values in function call -> arguments
*/

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2;
}

const result = addTwoNumbers(10,24);
// console.log("Result : ",result);

function loginUserMessage(userName = "Joey"){
    //if(userName === undefined)
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in!`
}

// console.log(loginUserMessage("Ritika"));
// console.log(loginUserMessage());
// if no value is passed in parameter the function will show undefined

function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 1000, 500));

const user ={
    username : "Jack",
    price : 999
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 500
// })

const myNewArray = [200, 400, 500, 1000]

function returnSecondVal(getArray){
    return getArray[1];
}
// console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([400, 900, 800, 1000]));