function uniqueValue(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in count)) {
            count[arr[i]] = 1
        } else {
            count[arr[i]]++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1) {
            return arr[i]
        } else {
            continue
        }
    }
    return null
}

console.log("The first unique value is: ", uniqueValue([4, 5, 1, 2, 1, 5, 4, 2]))
console.log("The first unique value is: ", uniqueValue([7, 3, 5, 3, 8, 7, 9]))