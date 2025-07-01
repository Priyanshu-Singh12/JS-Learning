let mydate=new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

console.log("\n")
//creating own date
//let myCreatedDate=new Date(2023,0,23) //!date month is starting with 0
let myCreatedDate=new Date(2006,11,22,5,12)//order should be same otherwise wrong result
console.log(myCreatedDate.toLocaleString())

let newDate=new Date("2006-12-12")//in this month start with 1 and order don't matter
console.log(newDate.toLocaleString())


//time Stamp
let myTimeStamp=Date.now()  //milli secodn
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())

//other 
console.log(mydate.getMonth()+1)// give 1 less than month
console.log(mydate.toLocaleString("dafault",{
    weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",

}))
