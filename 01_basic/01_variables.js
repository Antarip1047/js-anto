const account_Id = 144553
let accountEmail = "antarip@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// account_Id = 2 // not allowed
accountEmail = "anta@gmail.com"
accountPassword = "35464"
accountCity = "Sodepur"
 console.log(account_Id);

 /*
 do not use "var" because of block scope issue
 */
 console.table([accountState, account_Id, accountEmail, accountPassword, accountCity]);