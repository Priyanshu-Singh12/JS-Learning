//singleton  //!doubt how to create it
//it will create only one instance of object in whole program
//According to sir it is created by constructor
//!object.create



//Second way to make object it is not singleton
 //!object literals
const  mySym=Symbol("key1")
const user={
    name:"Priyanshu",
    [mySym]:"mykey1",
    "age":18,
    "full name":"Priyanshu Singh",
    email:"priy@drb"

}

console.log(user.name)
console.log(user["name"])
console.log(user["full name"])//if space is present then only this way
console.log(user.age)
console.log(user[mySym])//!for accesing as symbol type
user.greeting=function(){
    console.log(`Hi,${this.name}`)

}
console.log(user.greeting)
console.log(user.greeting())
user.email="@123priy"
Object.freeze(user)//!no changes will be made
user.email="dev@123"
console.log(user)
