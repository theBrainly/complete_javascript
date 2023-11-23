// primitive
//   7 => Number,string,boolean,null,undefined,symbol,bigInt
let num=1;
let str="string"
let isLogged=true
let request=null
let status;
let id=Symbol(123)
let anotherId=Symbol(123)
// non-primitive(reference)
// array,object,function
let arr=[1,2,4]
let obj={
    name:"akash",
    isLogged:"true",
    status:null,
}
let funct=function(){
    console.log("function working")
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) vs heap(non-primitive)

let number=12;
let anotherNumber=number;
anotherNumber=3;
console.log(number)
console.log(anotherNumber) // stack(primitive)

let student1={
    name:"akash",
    course:"btech",
    isLogged:"true"
}
let student2=student1;
student2.course="mtech"
console.log(student2.course)
console.log(student1.course)








