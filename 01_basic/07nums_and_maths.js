const score=100.982
console.log(score);

const balance=new Number(100.987)
console.log(balance)

console.log(score.toString().length)
console.log(balance.toFixed(2))  //two decimal point

console.log(score.toPrecision(4)) //4 digit number of significant figure

let number=100000000
console.log(number.toLocaleString('en-IN'))



//!                   Maths

/*console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(3.22))
console.log(Math.ceil(4.2))
console.log(Math.max(14,43,23,42))*/


//Todo: random number [0,1)a exclusive

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)  //1 to 10 1 added to avoid o when start with 0.0001

//todo   range in random
min=10
max=20


console.log(Math.floor(Math.random()*(max-min+1))+min)




