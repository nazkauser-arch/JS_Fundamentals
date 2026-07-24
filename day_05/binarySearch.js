function binarySearch(target, sortedArr) {
    let left = 0
    let right = sortedArr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (sortedArr[mid] === target) {
            return mid
        } else if (sortedArr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }  
    return "Target doesn't exist"  
}

//test cases
console.log(binarySearch(30, [10,20,30,40,50,60,70,80,90]))

console.log(binarySearch(999999, [1, 5, 10, 50, 100, 500, 999999]))

console.log(binarySearch(-100, [-500, -300, -100, -50, 0, 50, 100]))

console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9]))

console.log(binarySearch(1000, [10, 20, 30, 40, 50, 60, 70, 80, 90]))

console.log(binarySearch(1, [5, 10, 15, 20, 25, 30, 35, 40]))
