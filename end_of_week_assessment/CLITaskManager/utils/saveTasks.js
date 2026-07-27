const fs = require("fs")

function saveTasks() {
    try {
        const data = JSON.stringify(tasks, null, 2)
        fs.writeFileSync("tasks.json", data)
    } catch (error) {
        console.log("Error saving tasks: ", error.message)
    }
}
console.log(data)

module.exports = saveTasks
