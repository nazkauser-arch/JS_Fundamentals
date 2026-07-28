const prompt = require("prompt-sync")()

function addTask(tasks) {
    const id = prompt("Enter task ID: ")
    const title = prompt("Enter task title: ")
    const description = prompt("Enter task description: ")
    const priority = prompt("Enter task priority: ")

    const newTask = {
        id: id,
        title: title,
        description: description,
        status: "pending",
        priority: priority,
        createdAt: new Date().toISOString()
    }
    
    tasks.push(newTask)
    return tasks
}

module.exports = addTask