function mutilple5(nums){
    return nums*5;
}

mutilple5.power = 5;
console.log(mutilple5(2));
console.log(mutilple5.power);
console.log(mutilple5.prototype);

function createUser(name,score){
    this.name = name;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`name: ${this.name}, score: ${this.score}`);
}

const user1 = new createUser("John", 80);
const user2 = new createUser("Alice", 90);
console.log(user1);
console.log(user2);

user1.increment();
user1.printMe(); // name: John, score: 81
console.log(user1);
user2.increment();
console.log(user2);