const viewTask = require("./viewTask")

const prompt = require("prompt-sync")()

function sortTasks(tasks) {
    const sortBy = prompt("Sort by (creation date or priority): ")

    if (sortBy === "creation date") {
        tasks.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt)
        })
    } else if (sortBy === "priority") {
        const priorityOrder = {
            high: 1,
            medium: 2,
            low: 3
        }

        tasks.sort((a, b) => {
            return priorityOrder[a.priority] - priorityOrder[b.priority]
        })
    } else {
        console.log("Invalid sorting option")
    }
    viewTask(tasks)
    return tasks
}

module.exports = sortTasks