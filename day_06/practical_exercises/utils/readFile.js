const fs = require("fs")

function readFile() {
    try {
        const data = fs.readFileSync("data.json", "utf-8")
        if (!data) {
            return []
        }
        return JSON.parse(data)
    } catch(error) {
        return []
    }
}

module.exports = readFile