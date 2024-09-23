const { log } = require("console")

const pi=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(pi)
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const piValue=pi.value
console.log(piValue) // 3.141592653589793

pi.value=3.14
console.log(Math.PI) // 3.141592653589793 not writable

const chai={
    name:"hot tea",
    price:20,
    discount:0.1,
    getTea:function discountedPrice(){
        return this.price*(1-this.discount)
    }
}
console.log(chai.discountedPrice) // 18
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// { value: 'hot tea', writable: true, enumerable: true, configurable: true }

Object.defineProperty(chai,"name",{writable:false
    ,enumerable:false
})
chai.name="green tea"
console.log(chai.name) // green tea

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// loop on object

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != "function") {
        console.log(`${key}->${value}`);
    }
    
}


