//this refer to current context
const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);  //no context in global in node but in web it refers to //!window object

/*function chai(){
    let username="hitesh"
    console.log(this)
    console.log()
    console.log(this.username)

}*/
const chai=function(){
    let username="hitesh"
    console.log(this)
    console.log()
    console.log(this.username)

}
chai()

const chais=()=>{
    let username="histesh"
    console.log(this) //!empty{} in the arrow function
}
chais()

const add=(num1,num2)=>num1+num2//if no parenthesis then no return is used and function return //!implicitly
console.log(add(1,2))
const Add=(num1,num2)=>{
    num1+num2}
console.log(Add(1,2))
const Add1=(num1,num2)=>{return num1+num2}//!explixit return
console.log(Add1(1,2))
const Objectreturn=()=>{username:"Priyanshu"}//!undefined
console.log(Objectreturn())
const Objectreturn2=()=>({username:"Priyanshu"})
console.log(Objectreturn2())

