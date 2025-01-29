const id = 123456
let email = "mahaveer@gmail.com"
var password = "123456"
city = "bundi"

//id = 2 //not allowed
//console.log('id', id)
email = "abc@gmail.com"
password = "8445"
city = "kota"
/*
prefer not to use var
because of issue in block and functional scope
*/

//let email = "abc@gmail.com" //cannot redeclare block scope variable

let test
console.table([id, password, email, city, test])