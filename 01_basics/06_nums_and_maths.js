const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const num = 123.8966
// console.log(num.toPrecision(4)); // 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); add commas to understand easily

// -------------------- Maths -----------------------
/*
console.log(Math);
console.log(Math.abs(-72));
console.log(Math.round(72.556));
console.log(Math.ceil(4.2));  // upper value
console.log(Math.floor(4.9)); // lower value
console.log(Math.min(74, 25, 83, 45, 13)); 
console.log(Math.max(74, 25, 83, 45, 13));
*/ 
console.log(Math.random()); // between 0 and 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
