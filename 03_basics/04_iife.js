/*
IIFE -> Immediately invoked function expression [used to prevent global scope pollution ]
-> to stop the context we must add line terminator at the end of function
-> 1st () for function defination and 2nd for () execution
*/

(function fun(){
    // named IIFE
    console.log("DB connected");
})();
// fun()


( () => {
    console.log("Function invoked")
})();

( (name) => {
    console.log(`${name }, Function Invoked`)
})("Sam")
