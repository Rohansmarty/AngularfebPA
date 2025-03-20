
const BankAccount = (function() {
    let balance = 1000;  // Private variable

    return {
        deposit: function(amount) {
            if (amount > 0) balance += amount;
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) balance -= amount;
        },
        getBalance: function() {
            return balance;
        }
    };
})();

console.log(BankAccount.getBalance()); // 1000
BankAccount.deposit(500);
console.log(BankAccount.getBalance()); // 1500

console.log(BankAccount.balance); // undefined (can't access directly)


const numbers = { num1: 8, num2: 12 };

function addNumbers(x, y) {
    console.log(this.num1 + this.num2 + x + y);
}

// Calling with an object as `this`
addNumbers.call(numbers, 5, 5);  // Output: 30 (8 + 12 + 5 + 5)


const nums = [3, 7, 2, 9, 5];

const maxNum = Math.max.apply(null, nums);
const minNum = Math.min.apply(null, nums);

console.log("Max:", maxNum);  // Output: Max: 9
console.log("Min:", minNum);  // Output: Min: 2

function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const user = { name: "John" };

const sayHello = introduce.bind(user, "Hello"); 
sayHello("!");  // Output: Hello, my name is John!


