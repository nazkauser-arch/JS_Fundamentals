const findMinMax = function(arr){
    let i
    let largest = arr[0]
    let smallest = arr[0]
    for (i of arr){
        if (i > largest){
            largest = i;
        }
    else if (i < smallest){
        smallest = i
        }
    }
    return [smallest, largest]
}

result = findMinMax([-10, -5, -20, -1, -30])
console.log("The smallest value is: ", result[0])
console.log("The largest value is: ", result[1])


