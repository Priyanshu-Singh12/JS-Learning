const coding=["js","python","c","c++"]
//array specific function
//!callback function three parameter value,index,array

coding.forEach(function  (value){
    console.log(value)
})
/*coding.forEach( (value)=>{
    console.log(value)
    })*/
   coding.forEach(function (value,idx,array){
       console.log(value,idx,array)
    })

    
    //[{},{},{}]   forEach is used
const codeExtension=[
    {
        language:"java script",
        langExtenstion:"js"
    },
    {
        language:"java",
        langExtenstion:"java"
    },
    {
        language:"pyhton",
        langExtenstion:"py"
    }
]
function extension(item){
    console.log(item.langExtenstion)
}
codeExtension.forEach(extension)//!reference of function is passed not function called++
