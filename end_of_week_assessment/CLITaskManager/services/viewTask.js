function viewTask(tasks) {
    if (tasks.length === 0) {
        console.log("No tasks available")
    } else {
        for (let i of tasks) {
            console.log("Task ID: ", i.id)
            console.log("Title: ", i.title)
            console.log("Description: ", i.description)
            console.log("Status: ", i.status)
            console.log("Priority: ", i.priority)
            console.log("Created At: ", i.createdAt)
            console.log("----------------------------------------")
        }
    }
}


module.exports = viewTask