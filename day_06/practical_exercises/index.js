console.log("node.js initialized")

const capitalize = require("./utils/stringUtils")
const readFile = require("./utils/readFile")

const text = process.argv[2]

console.log(`Capitalized text is: ${capitalize(text)}`)

console.log(readFile("data.json"))
