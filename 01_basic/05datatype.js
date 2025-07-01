//data type basic of categorization is how they are stored in memory how they are accessed

//1    Primitive type  7 
//actual value is stored in stack
//faster
//null,undefined,bigInt,symbol,number,string

let id=Symbol("122")
let accountId=Symbol("122")
console.log(id==accountId) //symbol is unique

let bigNum=1222222222222222222n


//2     Reference type 0r non primitive   3types
//reference  is stored in stack and value is stored in heap
//slower
//array,function,object

let arr=["shaki","shiv","bhagwan"] //array 
console.log(typeof arr) //object

let obj={
    name:"Priyanshu",
    class:"second year"
}

let func=function(){
    console.log("Hello World")
}
console.log(typeof func)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primtive)                                       heap(non-primitive)

//stack
let student1="rama"
let student2=student1
student2="Krishna"

console.log(student2)
console.log(student1)

//heap
// in satck the reference is stored but actual value is stored in heap
let user1={
    name:"Priyanshu",
    email:"priy@gmail.com"
}
let user2=user1
user2.email="pridiv@gmail.com"
console.log(user1.email)
console.log(user2.email)
