// getters and setters must be used together
// if we are assigning this.password multiple time we will receive maximum call stack size exceeded error, to fix this we need to get or set new property
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ritika`
    }
    
    set password(pwd){
        this._password = pwd
    }
}

const Ritika = new User("ritika@gmail.com", "abc")
console.log(Ritika.email);
