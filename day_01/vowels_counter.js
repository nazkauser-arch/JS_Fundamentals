const vowelsCounter = function(string){
    let counter = 0;
    for (let i of string){
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            counter++
        }
    }
    return counter
}
console.log(vowelsCounter("aeiosuskjdlka"))