const prompt = require("prompt-sync")()

function updateTask(tasks) {
    const id = prompt("Enter task ID: ")

    let taskFound = false

    for (let i of tasks) {
        if (id === i.id) {
            const newTitle = prompt("Enter updated title: ")
            const newDescription = prompt("Enter updated description: ")
            const newPriority = prompt("Enter priority: ")
            i.title = newTitle
            i.description = newDescription
            i.priority = newPriority
            taskFound = true
            break
        }
    }
    if (taskFound) {
        console.log("Task updated successfully")
    } else {
        console.log("Task doesn't exist")
    }
    return tasks
}

module.exports = updateTask