let indianCompany=["hcl","tcs","wipro"]
let usCompany=["google","meta","apple"]
let korenCompany=["samsung"]
let techCompany=indianCompany.concat(usCompany) // only work with two
// let techCompany=indianCompany.push(usCompany) // problem bc is give array in array
console.log(indianCompany)
console.log(usCompany)
console.log(techCompany)
// separted
let separedArray=[...indianCompany,...usCompany,...korenCompany] //work as many arrays
console.log(separedArray)

console.log(Array.from("Akash"))
console.log(Array.isArray("Akash"))
console.log(Array.of(10,12,123))