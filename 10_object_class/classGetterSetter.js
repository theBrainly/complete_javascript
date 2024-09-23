class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // now both email can used value from constructor as well as from getter so race conditions give errors stack overflow 
    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val.toLowerCase();
    }
    get password(){
        return this._password.split('').reverse().join('');
    }
    set password(val){
        this._password = val;
    }

}

const user1 = new User('john.doe@example.com', 'password123');
console.log(user1.email); // john.doe@example.com
console.log(user1.password); // 3231sdrow