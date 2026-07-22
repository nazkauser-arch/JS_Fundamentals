function createBankAccount(initialBal) {
    let balance = initialBal
    return {
        deposit(amount) {
            balance += amount
            return (amount + " deposited. \nCurrent balance: " + balance)
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount
                return (amount + " withdrawn. \nCurrent balance: " + balance)
            } else {
                return "Insufficient balance"
            }
        },
        getBalance() {
            return ("Current balance: " + balance)
        }
    }
}

const account = createBankAccount(70000)
console.log(account.getBalance())
console.log(account.deposit(5000))
console.log(account.withdraw(3000))
console.log(account.getBalance())
