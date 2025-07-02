var a=30
if(true){
    //scope is inside{}
    //let and const cannot be accessed outside error
    var a=15
    let b=10
    const c=21
}

//console.log(c,b)//todo error
console.log(a)  //! a is showing latest vlaue which is problem

let e=10
if(true){
    let e=13
    console.log("inner :",e)
}
console.log(e)

function one(){
    const username="Priyanshu"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)//!error
    two()

}
one()


//      +++++++++++++Interesting+++++++++++++

console.log(addOne(5))  //!no error
function addOne(num){
    return num+1
}

//console.log(addone(6))  //!error since addone is not declared
const addone=function(num){
    return num+1
}

//closure is left