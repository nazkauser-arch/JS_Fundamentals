//Filter()
function myFilter(arr, callback){
    const result = []
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr) === true){
            result.push(arr[i])
        } else {
            continue
        }
    }
    return result
}

let numbers = [
  0,
  -15,
  23,
  45,
  -7,
  100,
  3,
  23,
  999,
  -1000,
  50,
  1,
  2,
  2,
  75
]
console.log(myFilter(numbers , function(number, i, numbers) {
    let count = 0
    for (let i of numbers) {
        if (i === number) {
            count++
        }
    }
    return count === 1
    && number > 10
}))
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8], num => num > 4))
