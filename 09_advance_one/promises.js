// creating a promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // now resolve() is connected to .then()
    },1000)
})

// promise Consumption, .then() is directly connected to resolve
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async two is resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username : "Jane", email : "jane@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "ritika", password : "123"})
        } else{
            reject("ERROR:Something Went Wrong!!")
        }
    }, 2000)
})

promiseFour
.then((user) => {
    // console.log(user);
    return user.username
} )
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Javascript", password : "123"})
        } else{
            reject("ERROR:JS Went Wrong!!")
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
       console.log(error); 
    }
}

consumePromiseFive()

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json(); // this conversion takes time
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

