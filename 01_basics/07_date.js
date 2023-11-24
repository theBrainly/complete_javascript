// dates
 let myDate=new Date()
//  console.log(myDate)
//  console.log(myDate.toString())

//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleString(undefined,{timeZone: 'Asia/Kolkata'}))
//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())


// let newDate=new Date("01-02-2002")
let myDob=new Date(2002,1,2)
// console.log(myDob.toDateString());
// console.log(myDob.getDate());

let timeStamp=Date.now()
let currDate=Date.now()
let timeSpend=currDate-myDob.getTime()
let timeSpendInSec=Math.floor(timeSpend/1000)
let totalDaySpend=Math.floor(((timeSpendInSec/60)/60)/24)
console.log(totalDaySpend)
