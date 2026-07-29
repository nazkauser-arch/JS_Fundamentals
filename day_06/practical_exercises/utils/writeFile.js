const fs = require("fs")

function writeFile(data) {
    try {
        const JSONdata = JSON.stringify(data, null, 2)

        fs.writeFileSync("data.json", JSONdata)
    } catch (error) {
        console.log("Error message: ", error.message)
    }
}

module.exports = writeFile