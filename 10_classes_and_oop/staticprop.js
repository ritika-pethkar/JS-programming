class User{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`Username is : ${this.username}`);   
    }

    // This will not allow an instance to access this method
    static createId(){
        return `123`
    }
}

const userOne = new User("Ritika")
userOne.login();
// console.log(userOne.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const userTwo = new Teacher("Sam", "sam@gmail.com")
console.log(userTwo);

