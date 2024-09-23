const user={
    email:"user@example.com",
    password:"password123",
    set email(value) {
        this.password=value;
    },
    get email() {
        return this.password.split('').reverse().join('');
    }
}