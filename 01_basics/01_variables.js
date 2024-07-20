const accountId = 144553
let accountEmail = "ritika@google.com"  
var accountPassword = "12345" 
accountCity = "Bhopal"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rp@rp.com"
accountPassword = "213214321"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])