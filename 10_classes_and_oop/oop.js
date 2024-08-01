//--------------------- Object Literal ----------------------------
const User = {
    username : "Ritika",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`username : ${this.username}`);
        // console.log(`LoginCount : ${this.loginCount}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  {}

//--------------------- Constructor Function ---------------------
// const promiseOne = new Promise() -> new keyword creates new context which is also known as constructor function

function user(userName, loginCount, isLoggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    this.greetings = function(){
        console.log(`Welcome ${this.userName}`);
    }

    // return this
}

const userOne = new user("Ritika", 5, true)
const userTwo = new user("Somya", 10, false) 
console.log(userOne.constructor);
// console.log(userTwo);

/*
new Keyword - 
by using new keyword other objects will not be affected
    - step 1 : empty object is created
    - step 2 : constructor function is called and all the arguments    are injected in this keyword.
    - step 3 : all this keyword's values will be returned
*/
