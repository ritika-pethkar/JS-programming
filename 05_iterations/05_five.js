// for each loop
const coding = ["js", "java", "C++", "Python", "React"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((element) => {
//     console.log(element);
// });

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe); // pass only the reference of function

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
