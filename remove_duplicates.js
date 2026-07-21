function removeDuplicates(arr){
    let result = new Set()
    for (let i of arr){
        if (!(result.has(i))){
            result.add(i)
        }
    }
    return Array.from(result)
    
}

// Test Cases
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))
console.log(removeDuplicates([
  45, -12, 0, 78, 45, 12, -12, 99, 0,
  78, 33, -45, 12, 99, 100, 33, -45,
  1, 2, 3, 1, 2, 3, 100, 78, -12,
  500, 0, -500, 500, 45
]))
console.log(removeDuplicates([
  101, 202, 303, 404, 505,
  101, 202, 303, 404, 505,
  101, 202, 303, 404, 505,
  999, 888, 777,
  999, 888, 777,
  1, 2, 3, 4, 5,
  5, 4, 3, 2, 1,
  101, 999, 505, 777
]))