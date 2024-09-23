function setUserName(userName) {
    // completely db calls
    this.userName = userName;
    console.log("working");
    // this will work but it delete in end and doesnt return anything so content is deleted
    // so we used call(this) this will give parent this so it update into content of parent so even if content is deleted so it will update
    // call(this, userName);
    
}
function createUser(userName, password, email) {
    this.password = password;
    this.email = email;
    setUserName.call(this,userName);
}
let user = new createUser("Akki","akki@123","a@getMaxListeners.com")


console.log(user)