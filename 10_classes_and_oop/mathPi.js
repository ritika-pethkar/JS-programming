const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(Math.PI); // value cannot be overidden
console.log(descriptor);

const movie = {
     name : 'Haikyu Dumpster Battle',
     price : 199,
     isAvailable : true,
     bookMovie : function(){
        console.log("Housefull!");        
     }
}

console.log(Object.getOwnPropertyDescriptor(movie, 'name'));

Object.defineProperty(movie, 'name',{
    // writable: false,
    enumerable: false // now, we won't get all properties of object
})

// console.log(Object.getOwnPropertyDescriptor(movie, 'name'));

// Objects are not iterable that is why we use Object.entries
for (const [key, value] of Object.entries(movie)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }    
}


