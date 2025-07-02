//!if argument are not given in function they don't give error but show  
//undefined
function user(username){
    if(!username){
        console.log("Please enter the name")
        return
    }
    console.log(`hi ${username}, The programming world is waiting for you`)
}
user//reference
user("DEVIL")

function Sum(number1,number2){
    console.log("Sum of two number is calculating")
    return number1+number2
}
let result=Sum(10,20)
console.log(result)

//passing mutliple value to function
function CreateCartPrice(num){
    console.log(num)
}
CreateCartPrice(200,300)//return 200 only

function CreateCartPrices(val1,val2,...num){
    console.log(num)
}
CreateCartPrices(10,20,30,40,50)  //!power of rest operator

//passing object

function receipt(userObject){
    console.log(`Hi,${userObject.username} your bill is ${userObject.price}`)
}
const user1={
    username:"Priyanshu Singh",
    price:1000000000000
}
receipt(user1)

//passsng arary
function arraySecond(array){
    if(array.length<2)console.log("Second Element not exist")
    else console.log(array[1])
}
arraySecond([2,31])