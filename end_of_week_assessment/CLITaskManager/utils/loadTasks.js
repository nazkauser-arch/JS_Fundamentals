const fs = require("fs")

function loadTasks() {
    try {
        const data = fs.readFileSync("tasks.json", "utf-8")
        if (!data) {
            return []
        }
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

module.exports = loadTasks