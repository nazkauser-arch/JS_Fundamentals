const cart = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 2000, quantity: 3 }
]

//Calculating Total
function calcTotal(cart){
    let total = 0
    for (let item of cart){
        total += item.price * item.quantity
    }
    return total
}

//calculating discount
function calcDiscount(total){
    let discount = 0.10
    if (total > 10000){
        return total * discount 
    }
}

//calculating final price
function calcFinalPrice(total, discount){
    return total - discount
}

//generating receipt
function generateReceipt(total, discount, finalPrice){
    return `Total amount: ${total} \nDiscount applied: ${discount} \nFinal Amount to be paid: ${total}`
}



function processCheckout(cart){
    let total = calcTotal(cart)
    let discount = calcDiscount(total)
    let finalPrice = calcFinalPrice(total, discount)
    let receipt = generateReceipt(total, discount, finalPrice)

    return receipt
}

console.log(processCheckout(cart))
