class Bank {
    constructor(account_id) {
        this.account_id = account_id;
        this.balance = 0;
        this.is_sensitive = false;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    showBalance() {
        return this.balance;
    }

    // to/from
}

const user1 = new Bank(123);
const user2 = new Bank(321);
console.log(user1);

user1.deposit(2000);
user1.withdraw(500);
console.log(user1.showBalance());
console.log(user1);