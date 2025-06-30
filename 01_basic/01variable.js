console.log("hello world");
const accountId=101;
//accountId=100 not allowed
var accountEmail="bal@gmail.com"
/*
Prefer not to  use var
because of issue of block scope and functional scope
*/
let accountHolderName="Balwant Singh"
age=49;
let salary;
console.log(age);
console.table({ accountId,age, accountEmail, accountHolderName,salary });
console.table([ accountId,age, accountEmail, accountHolderName,salary ]);
