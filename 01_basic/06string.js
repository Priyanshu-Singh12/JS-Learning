
let str=new String("priyanshu") //!object    //more space
console.log(str)
 let str2="priyanshu"  //primitive data type
 console.log(str2)
 console.log(str==str2)
 console.log(str===str2)  //type different

 let marks=100

 //console.log(str1+"marks is"+marks)   avoid
 console.log(`${str} marks is ${marks}`)  //use this

 //Todo: funtion in strings
 console.log(str.length)

 console.log(str.charAt(8))

 console.log(str.indexOf("p"))

 console.log(str.substring(1,8)) //not take -ve

 console.log(str.slice(-5,-1))  //!  can take -ve 
 console.log(str.slice(-5))
 let a="  ravi "
 console.log(a)
 console.log(a.trim())

 let b="rav-i- singh"
 console.log(b.split("-"))

 let url="htts://www.priy.com/hit%20afo"
 console.log(url.replace("priy","priyanshu"))
 console.log(url.includes("priy"))