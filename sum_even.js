const evenSum = function(arr){
    let sum  = 0;
    for (let i of arr){
        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(evenSum([1, 2, 3, 4, 5, 6, 7, 8]))