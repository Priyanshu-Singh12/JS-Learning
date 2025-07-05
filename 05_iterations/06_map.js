//three argument
let num=[1,2,3,4,5,6,7,8]

const nums=num.map((value)=>value*10)
console.log(nums)

//chaining

const num1=num.map((value)=>value*10).map((value)=>value+1).filter((item)=>item<=49)
console.log(num)
console.log(num1)