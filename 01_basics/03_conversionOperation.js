let score="";
console.log(typeof(score));
console.log(typeof score);
let typeOfNumber=Number(score);
console.log(typeof typeOfNumber);
console.log(typeOfNumber);
// "33"=>33 number
// "33abc"=> NaN(not an Number) number
// null =>0 number
// undefine=> NaN 
// boolean=> 1(true),0(false)

let str=undefined;
let boolCheck=Boolean(str);
console.log(boolCheck);
// ""=>false,"anything"-> true, null-> false false for undefine
