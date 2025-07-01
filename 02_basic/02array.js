const marvel_heroes=["ironman","thor","spiderman"]
const dc_heroes=["flash","superman","batman"]

//not able to acheive by marvel_heroes.push(dc_heroes)

const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes)

//! spread operator ... genrally this used

const heroes=[...marvel_heroes,...dc_heroes]
console.log(heroes)


const another_array=[1,2,3,[4,5],[4,7,[9]]]
console.log(another_array.flat(Infinity))

console.log(Array.isArray("hitesh"))
console.log(Array.from("Ravi"))
console.log(Array.from({
    name:"priyanshu",
    fame:"superstar"
}))//!interesting

let score1=100
let score2=99
let score3=100
console.log(Array.of(score1,score2,score3))

