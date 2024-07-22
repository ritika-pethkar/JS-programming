// --------- Objects Singleton ---------

// const instagramUser = new Object() 
const instagramUser = {} // non-singleton

instagramUser.id = "abc123"
instagramUser.name = "Joey"
instagramUser.isLoggedIn = false

// console.log(instagramUser);

const user = {
    email : "abc@gmail.com",
    fullName : {
        userFullname : {
            firstName : "Ritika",
            lastName : "Pethkar"
        }
    }
}

// console.log(user.fullName.userFullname.firstName);

const obj1 = { 1 : "a", 2 : "b"} 
const obj2 = { 3 : "c", 4 : "d"} 
const obj3 = { 5 : "e", 6 : "f"} 

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2) // every obj will get assign in obj1
// const obj4 = Object.assign({}, obj1, obj2, obj3) // good convention
const obj4 = {...obj1, ...obj2} 
// console.log(obj4);

const users =[
    {
        id: 1,
        email : "rp@gmail.com"
    },
    {
        id: 2,
        email : "sp@gmail.com"
    },
    {
        id: 3,
        email : "rk@gmail.com"
    },
    {
        id: 4,
        email : "kt@gmail.com"
    },
]

// console.log(users[1].email);
/*
console.log(instagramUser);
console.log(Object.keys(instagramUser));
console.log(Object.values(instagramUser));
console.log(Object.entries(instagramUser)); // [key : val], [Key1 : val1]

console.log(instagramUser.hasOwnProperty('isLoggedIn'));
*/

// ------------- Object De-Structuring ---------------

const course = {
    courseName : "Javascript",
    price : "999",
    courseInstructor : "abc"
}

// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

/* --------------- API ------------------
Json format
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/
[
    {},
    {},
    {}
]

