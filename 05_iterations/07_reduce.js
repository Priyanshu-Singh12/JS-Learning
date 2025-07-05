let mynum=[1,2,3,4,5,6,7,8,9,10]

const num=mynum.reduce((start,current)=>start+current)//by default intializes  first value
console.log(num)

const num2=mynum.reduce((start,current)=>{
    console.log(`start=${start} and current=${current}`)
    return start+current
},10) //here start=10 initalizes to start

const cart=[
    {
        item:"toothpaste",
        price:100
    },{
        item:"biscuit",
        price:50

    },
    {
      item:"Bulb"  ,
      price:100
    }
]

let price=cart.reduce((initial,value)=>value.price+initial,0)//initailize the initial=0
console.log(price)