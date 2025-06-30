let a=null;
let b=undefined;
let c="12"
let d="12ab"
let num=12

//while doing conversion Capital letter start
let e=Number(a);                                //0
let f=Number(b);                               //NaN
let g=Number(c);                               //12
let h=Number(d);                               //NaN


//type of all is number
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))

let i=Boolean(b);
console.log(b);
//"" null 0 false
//"ab" 12 true


let j=String(num)
console.log(typeof j)

//operation

console.log(3**5)

 str1="Hello"
 str2=" world"
 str3=str1+str2
 console.log(str3)

 console.log("1"+2)
 console.log(1+"2")
 console.log("1"+2+3)
 console.log(2+3+"1") //it will return 51

 console.log(+true)  //1
 console.log(+"")    //0

 let num1, num2 , num3
 num1=num2=num3=2+3