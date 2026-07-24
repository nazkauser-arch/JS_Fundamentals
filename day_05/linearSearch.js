function linearSearch(target, numbers) {
    for (let item = 0; item < numbers.length; item++) {
        if (numbers[item] === target) {
            return item
        }
    }
    return "Target doesnt exist"
}

//Test cases
console.log(linearSearch(40, [10, 20, 30, 40, 50, 60]))

console.log(linearSearch(999999, [1, 5, 10, 50, 100, 999999]))

console.log(linearSearch(-50, [100, 75, 50, 25, 0, -25, -50]))

console.log(linearSearch(0, [999, 500, 100, 50, 0, 0, 0]))

console.log(linearSearch(12345, [1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(linearSearch("apple", [10, "banana", true, null, "apple", {}, []]))
