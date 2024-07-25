const userEmail = []

// when we assume a value to be true it is called as truthy value,
// "" is taken as false, [] empty array is taken as true

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

/*
falsy values
-> false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
-> "0", 'false', " ", [], {}, function(){}, 
*/

if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// -> false == 0 is true, false == "" is true, 0 == '' is true

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10 val1 = 5
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// condition ? true : false 

const price = 100
price <= 80 ? console.log("Price is greater than 80"): console.log("price is more than 80");