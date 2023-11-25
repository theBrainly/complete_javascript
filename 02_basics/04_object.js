const tinderUser= new Object();
console.log(tinderUser);
// only diffence is .. it is singleton
tinderUser.id="123abc";
tinderUser.name="akki";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);\


const regularUser={
   email:"abc@gmail.com",
   fullName:{
    userFullName:{
        fristName:"akash",
        lastName:"sharma",
    }
   }
}
// console.log('====================================');
// console.log(regularUser.fullName.userFullName);
// console.log('====================================');

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// marging
// 1. way : const obj3={obj1,obj2}  problem
const obj3=Object.assign(obj1,obj2) // one way 
// 2. way
const obj4=Object.assign({},obj1,obj2); // right way empty{} this is target and other all are soucres
console.log(obj3);
console.log(obj4);
// 3.way of marging
const object={...obj1,...obj2}
console.log(object);


// when data is coming from dbs

const users=[
    {
        id:1,
        email:"a@gnmail.com"
    },
    {
        id:1,
        email:"a@gnmail.com"
    },
    {
        id:1,
        email:"a@gnmail.com"
    },
    {
        id:1,
        email:"a@gnmail.com"
    }
]
console.log(
    users[1].email
    
    );
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //this will return array
console.log(Object.values(tinderUser));
// output [ 'id', 'name', 'isLoggedIn' ]
// [ '123abc', 'akki', false ]
console.log(Object.entries(tinderUser)); 
// output:[ [ 'id', '123abc' ], [ 'name', 'akki' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("name"));
// o:true



