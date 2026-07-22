function processArr(arr, callback) {
    let result = []
    for (let item of arr) {
        result.push(callback(item))
    }
    return result
}

// Example functions
function double(num) {
    return num * 2
}
function square(num) {
    return num * num
}

const numbers = [1, 2, 3, 4, 5]

console.log(processArr(numbers, double))
console.log(processArr(numbers, square))
