const prompt = require("prompt-sync")()

function deleteTask(tasks) {
    const id = prompt("Enter task ID: ")

    let taskFound = false

    for (let i of tasks) {
        if (i.id === id) {
            tasks = tasks.filter(task => task.id !== id)
            taskFound = true
            break
        }
    }
    if (taskFound) {
        console.log("Task deleted successfully")
    } else {
        console.log("Task doesn't exist")
    }
    return tasks
}

module.exports = deleteTask