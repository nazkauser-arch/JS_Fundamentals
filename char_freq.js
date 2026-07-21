function charFreq(text){
    let charCount = {}
    for (let i of text){
        if (!(i in charCount)){
            charCount[i] = 1
        }
        else {
            charCount[i]++
        }
    }
    return charCount
}

// Test Cases
console.log(charFreq("hello"))
console.log(charFreq("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"))
console.log(charFreq("The quick brown fox jumps over the lazy dog"))
console.log(charFreq(""))