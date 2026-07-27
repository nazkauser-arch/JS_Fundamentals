function wordFreq(text) {
    let wordCount = {} 
    let cleanedSentence = text.replace(/[^\w\s]/g, "")
    let lowerCaseSentence = cleanedSentence.toLowerCase()
    let word = lowerCaseSentence.split(" ")
    for (let i of word) {
        if(!(i in wordCount)) {
            wordCount[i] = 1
        } else {
            wordCount[i]++
        }
    }
    return wordCount
}

console.log(wordFreq("The quick brown fox jumps over the lazy dog, while the clever fox carefully watches the dog because the dog doesn't notice that the fox has already jumped over the extremely lazy dog multiple times!"))
const prompt = require("prompt-sync")()
let text = prompt("Enter Sentence: ")
console.log(wordFreq(text))