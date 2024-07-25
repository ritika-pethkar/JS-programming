// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc : ${acc}, currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "DSA Course",
        price : 4999
    },
    {
        itemName : "Flutter Course",
        price : 3999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
]

const shoppingCartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(shoppingCartTotal);