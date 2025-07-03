const myobject={
    name:"priyanshu",
    class:"Btech",
    branch:"CSE"
}
//!obect run
for(let key in myobject){
    console.log(`${key}->${myobject[key]}`)
}

//it return key threfore key in array is index
let arr=[100,33,44,23,44]
for(let key in arr)
    console.log(key)

let map=new Map()
map.set("name","priyanshu")
//!map don't run 
for(let key in map)
    console.log(key)
