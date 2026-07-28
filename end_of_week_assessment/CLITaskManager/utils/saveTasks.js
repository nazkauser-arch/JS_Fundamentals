const fs = require("fs")

function saveTasks(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 2)
        console.log(data)

        fs.writeFileSync("tasks.json", data)
    } catch (error) {
        console.log("Error saving tasks: ", error.message)
    }
}

module.exports = saveTasks
