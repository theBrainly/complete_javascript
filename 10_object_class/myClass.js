// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//     encrpytPassword(){
//         return `${this.password}abc`
//     }
//     changeEmail(){
//         return `${this.email}12`
//     }
    
// }

const user=new User("user@example.com","password123")
console.log(user.encrpytPassword()) // password123abc
console.log(user.changeEmail()) // user@example.com12
// behind the sense of class

function User(name, password){
    this.name = name;
    this.password = password;
}

User.prototype.encrpytPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeEmail = function(){
    return `${this.name}12`
}

const user2=new User("user@example.com","password123")
console.log(user2.encrpytPassword()) // password123abc
console.log(user2.changeEmail()) // user@example.com12