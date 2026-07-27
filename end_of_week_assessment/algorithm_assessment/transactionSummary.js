function transactionSummary(transactions) {
    const summary = {}
    for (let i = 0; i < transactions.length; i++) {
        if (!(transactions[i].userId in summary)) {
            summary[transactions[i].userId] = {
                creditedAmount: 0,
                debitedAmount: 0,
                finalBalance: 0
            }  
        }
        if (transactions[i].type === "credit") {
            summary[transactions[i].userId].creditedAmount += transactions[i].amount
        } else if (transactions[i].type === "debit") {
            summary[transactions[i].userId].debitedAmount += transactions[i].amount
        }
        summary[transactions[i].userId].finalBalance = summary[transactions[i].userId].finalBalance = summary[transactions[i].userId].creditedAmount - summary[transactions[i].userId].debitedAmount
        if (summary[transactions[i].userId].finalBalance < 0) {
            summary[transactions[i].userId].finalBalance = 0
        }
    }
    return summary

}

const transactions = [
  { userId: 1, amount: 500, type: "credit" },
  { userId: 2, amount: 200, type: "debit" },
  { userId: 1, amount: 100, type: "debit" },
  { userId: 2, amount: 300, type: "credit" }
]

console.log(transactionSummary(transactions))