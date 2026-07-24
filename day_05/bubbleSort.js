function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))

console.log(bubbleSort([5, 3, 8, 3, 1, 5, 2, 8, 1]))

console.log(bubbleSort([5, 3, 8, 3, 1, 5, 2, 8, 1]))

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]))

console.log(bubbleSort([1000, -500, 999, 0, -1, 1000, 500, -500]))

console.log(bubbleSort([]))

console.log(bubbleSort([7, 7, 7, 7]))

console.log(bubbleSort([42]))


