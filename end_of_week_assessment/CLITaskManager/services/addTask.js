const prompt = require("prompt-sync")()
const { validateTitle, validatePriority } = require("../utils/validateInput")

function addTask(tasks) {
    let id = 1

    if (tasks.length > 0) {
        const lastId = Math.max(...tasks.map(task => Number(task.id)))
        id = lastId + 1
    }

    let title
    while (true) {
        title = prompt("Enter task title: ")
        if (validateTitle(title)) {
            break
        }
        console.log("Title cannot be empty")
    }

    const description = prompt("Enter task description: ")


    let priority
    while (true) {
        priority = prompt("Enter task priority: ")
        if (validatePriority(priority)) {
            break
        } console.log("Invalid priority. Use high, medium or low")
    }

    let taskAdded = false

    const newTask = {
        id: id.toString(),
        title: title,
        description: description,
        status: "pending",
        priority: priority,
        createdAt: new Date().toISOString()
    }

    tasks.push(newTask)
    console.log("Task added successfully")

    return tasks
}

module.exports = addTask