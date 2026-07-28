const prompt = require("prompt-sync")()

function markTask(tasks) {
    const id = prompt("Enter task ID: ")

    let taskFound = false

    for (let i of tasks) {
        if (id === i.id) {
            i.status = "completed"
            taskFound = true
            break
        }
    }
    if (taskFound) {
        console.log("Task marked as completed")
    } else {
        console.log("Task not found")
    }
    return tasks
}

module.exports = markTask