let score="";
// console.log(typeof(score));
// console.log(typeof score);
// let typeOfNumber=Number(score);
// console.log(typeof typeOfNumber);
// console.log(typeOfNumber);
// "33"=>33 number
// "33abc"=> NaN(not an Number) number
// null =>0 number
// undefine=> NaN 
// boolean=> 1(true),0(false)

let str=undefined;
let boolCheck=Boolean(str);
// console.log(boolCheck);
// ""=>false,"anything"-> true, null-> false false for undefine
// ****operation****
// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

// let str1="hello"
// let str2="world"
// let str3=str1+str2
// console.log(str3);
// console.log(2+2+2);//6
// console.log(2+2+"2"); // 42
// console.log("2"+2+2); //222

console.log(+true) //1
// console.log(true+) //error
console.log(+'') //0
let i=0;
let post=i++;
let pre=++i;

let num1,num2,num3;
num1=num2=num3=0;
console.table([num1,num2,num3])
