const prompt = require("prompt-sync")()

function filterTasks(tasks) {
    const status = prompt("Filter by (pending/completed): ")

    let taskFound = false

    for (let i of tasks) {
        if (i.status === status) {
            console.log("Task ID: ", i.id)
            console.log("Title: ", i.title)
            console.log("Description: ", i.description)
            console.log("Status: ", i.status)
            console.log("Priority: ", i.priority)
            console.log("Created At: ", i.createdAt)
            console.log("----------------------------------------")
            taskFound = true
        }
    }
    if (!(taskFound)) {
        console.log(`No task found with ${status} status`)
    }
}

module.exports = filterTasks