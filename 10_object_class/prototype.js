

let myname ="akash    ";

String.prototype.trueLength = function(){
    return this.trim().length
}
// myname.__proto__ = trimleng

console.log(myname.trueLength());
const myArr=[1,2,3,4];

const myObject={
    a:1,
    b:2,
    c:3
}
Object.prototype.myOwnFunction=function( fuc){
    console.log(`${fuc}`)
}
myObject.myOwnFunction(typeof myObject);
myArr.myOwnFunction(typeof myArr);

// inheritance

const teacher={
    makeVideo: true
}
const teachingSupport={
    isAvailable: true,
    isClassroom: true
}
const TASupport={
    makeAssigment: true,
    __proto__: teachingSupport
}

// TASupport.__proto__ =teachingSupport


console.log(TASupport) // true

// modol structure for inheriance prototype

Object.setPrototypeOf(teacher,TASupport)
console.log(teacher.makeAssigment);
console.log(teacher.isClassroom);
