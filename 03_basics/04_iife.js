//immdiately invoked function expressin IIFE
//!for II  and prevent global scope pollution


(function chai(){
    console.log(`DB oconnected`)
})()
console.log("Hi")
console.log("Hello"); //it is giving error without semicolon it is not inserting semicolon automatically here

((name)=>{
    console.log(`${name},DB oconnected successfully`)
})("priyanshu")
console.log("Hi")
console.log("Hello")

