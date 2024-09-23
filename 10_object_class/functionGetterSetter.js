function User(email, password){
  this.email = email;
  this.password = password;
  Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase();
    },
    set: function(val){
      this._email = val.toLowerCase();
    }
  })
}