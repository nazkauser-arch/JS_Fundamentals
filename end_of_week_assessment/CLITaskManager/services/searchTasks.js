const prompt = require("prompt-sync")()

function searchTasks(tasks) {
    const title = prompt("Enter title to search task: ")

    let taskFound = false

    for (let i of tasks) {
        if (title === i.title) {
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
        console.log(`No task found with title "${title}"`)
    }
}

module.exports = searchTasks