function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username) // here we are giving current context of this function as 'this' in function call
    this.email = email;
    this.password = password
}

const jack = new createUser("Jack", "jack@gmail.com", "123")
console.log(jack)