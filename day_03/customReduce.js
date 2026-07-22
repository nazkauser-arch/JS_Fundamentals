//Reduce
function myReduce(arr, callback){
    let result = 0
    for (let i = 0; i < arr.length; i++){
        result = callback(result, arr[i], i, arr)
    }
    return result
    //console.log(result)
}


//test cases
console.log("The sum of the array is: ", 
    myReduce([1, 2, 3, 4, 5], (num, sum) =>{  
    return sum + num

}))

console.log("Number of even numbers: ", 
    myReduce([1, 2, 3, 4, 5, 6, 8], (count, num) => {
    if (num % 2 === 0) {
        return count + 1
    } else {
        return count
    }
}))
