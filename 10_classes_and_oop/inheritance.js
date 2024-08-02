class User{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`${this.username} logged in!`);    
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);   
    }
}

const userOne = new Teacher("Tanaka", "Tanaka@gmail.com", "1234")
const userTwo = new User("Kageyama")
userOne.login()
userOne.addCourse()
userTwo.login()
// console.log(userOne === userTwo);
console.log(userOne instanceof User);


