//cosnt tinderuser={}   //!object literals
//now construtor method
const tinderuser=new Object() //{}
tinderuser.name={
        firstName:"hitesh",
        lastName:"Singh"
    }
tinderuser.id=123
console.log(tinderuser.name.lastName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)//!here everything will go into target also means first element to
console.log(obj3)
console.log({...obj1,...obj2})

console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))

console.log(obj3.hasOwnProperty(3))

//Object de-structure
const course={
    Coursetitle:"Java script",
    CourseDesciption:"in this course full details js will be done",
    courseInstructor:"hitesh chaudarry"

}
const {courseInstructor}=course
//console.log(course.courseInstructor)
console.log(courseInstructor)
const {courseInstructor:teacher}=course
console.log(teacher)

//json
/*
{"name":"priyanshu Singh",
"class":"btech"
}
*/
