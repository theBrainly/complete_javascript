let firstName ="Akash"
let surname=" Sharma"
let age=20;''
// console.log("my first name is "+firstName+"surname is "+surname +"and my age is "+age) //not prefer
// console.log(`my first name is ${firstName} surname is ${surname} and my age is ${age}`). // prefered methd

// another type of string define
let gameName=new String("snakeGame")
// this will give more function to use
//console.log(gameName.length()) // length is not function
console.log(gameName.length)

let gameObj=gameName.substring(0,5)
console.log(gameObj);
let newString=gameName.slice(-1,3)
console.log(newString);

let newStringOne="  spaceName    "
console.log(newStringOne.trim)
console.log(newStringOne.charAt(2))
console.log(newStringOne.indexOf(2))

let url="www.google.com"
console.log(url.replace("google","youtube"));
console.log(url.includes('goo'))
console.log(url.split("."))