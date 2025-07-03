const email1="priy@123"
const email2=[]
if(email1){
    console.log("Email is received")
}
else{
    console.log("No email received")
}
if(email2){
    console.log("Email is received")
}
else{
    console.log("No email received")
}


//Truthy value
//"0"  'false' " "  //! [] {} function(){}      true value

//Falsy value
// false   0   BigInt On   NaN   Null   Undefined    ""

//Todo     Nullish colasecing operator(??)
//If first value is NUll Undefined it will return secon value otherwise first value
//! 0 on left means 0 since it is not null undefined  (difference from or operator)

const val1=10??12
const val2=null??12
const val3=undefined??12
const val4=null??undefined
const val5=null??undefined??12
console.log(val1,val2,val3,val4,val5)


//Terniary Operator

//conditon?true:false

console.log(false==[])
console.log(false=="")
console.log({}==[])
console.log({}==false)


//!  for checking []  {} use length
const obj1={}
if(Object.keys(obj1).length==0) console.log("Object is empty")






