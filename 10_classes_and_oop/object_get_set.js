const User = {
    _email : "r@gmail.com",
    _paasword : "r_123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
