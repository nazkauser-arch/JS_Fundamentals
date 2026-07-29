console.log("node.js initialized")

const capitalize = require("./utils/stringUtils")
const readFile = require("./utils/readFile")
const writeFile = require("./utils/writeFile")

const text = process.argv[2]

console.log(`Capitalized text is: ${capitalize(text)}`)

const data = readFile()

console.log(readFile())

const newValue = process.argv[3]
data.push(newValue)
writeFile(data)
