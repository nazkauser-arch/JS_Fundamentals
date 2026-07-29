console.log("node.js initialized")

const capitalize = require("./utils/stringUtils")
const readFile = require("./utils/readFile")
const writeFile = require("./utils/writeFile")

console.log("Create and import a utility module")
const text = process.argv[2]

console.log(`Capitalized text is: ${capitalize(text)}`)
console.log("-----------------------------------------------------------")
console.log("Read and write file using node.js")

const data = readFile()

console.log(readFile())

const newValue = process.argv[3]
data.push(newValue)
writeFile(data)
