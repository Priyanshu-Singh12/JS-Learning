//for of loop
//! objects are not iterable sometime so they give error
//allowed with array,map,set,string,etc all iterable 


const greetings="hello world";
for(let greet of greetings){
    console.log(greet)
}

const map=new Map()
map.set("IN","India")
map.set("USA","United Sate of India")
map.set("FR","France")
map.set("IN","India") //come once

for(let i of map){
    console.log(i)
}
for(let [key,value] of map){
    console.log(`${key} -> ${value}`)
} //!for in not work with map

const obj={
    king:kohli
}

/*for(let i of obj){ //!go for for in loop
    console.log(i)

}*/ //!error