//array to store mut«ltiple value in dame variable
const myarr=[1,"ravi",true]
const arr=new Array(1,2,34,89)

arr.push(110)
arr.unshift(0)//insert element at start
//avoid this since it changes whole array position
arr.pop()

arr[10]=10  //changing of value possible since it is changing valu at reference in heap

arr.shift()

//  arr=[12,29] //! not possible to assign another value since const is used
console.log(arr)

console.log(arr.indexOf(-100))//-1 since not found
console.log(arr.includes(1))

console.log(arr.join())//default sparator is ,
console.log(arr.join(""))

//slice and splice
//! splice(index,delete count, item added)
const arr1=[1,2,3,4,5,6]
const arr2=arr1.slice(1,4)
console.log(arr2)
console.log(arr1)//no change
const arr3=arr1.splice(1,4) //store deleted elemnt
console.log(arr3)
console.log(arr1)//changes in orignial array
arr1.splice(2,0,12,334)
console.log(arr1)






