// ES6
class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const hinata = new User("hinata", "h@gmail.com", "shoyo")
console.log(hinata.encryptPassword());
console.log(hinata.changeUsername());


// Behind The Scene
function NewUser(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

NewUser.prototype.encryptPassword = function(){
    return `${this.password}#abc`
}
NewUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const anya = new NewUser("anya", "anya@gmail.com", "1234")
console.log(anya.changeUsername());


