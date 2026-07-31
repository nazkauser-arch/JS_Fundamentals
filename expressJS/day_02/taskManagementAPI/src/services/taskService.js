let tasks = [
    {
        id: "1",
        title: "Learn Express",
        description: "Complete the Express assignment",
        status: "pending",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

// Get all tasks
exports.getAllTasks = () => {
    return tasks
}

// Get task by id
exports.getTaskById = (id) => {
    return tasks.find(task => task.id === id)
}

// Create new task
exports.createTask = (data) => {

    const newTask = {
        id: String(tasks.length + 1),
        title: data.title,
        description: data.description,
        status: data.status,
        priority: data.priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask)

    return newTask
}

// Update task
exports.updateTask = (id, data) => {

    const task = tasks.find(task => task.id === id)

    if (!task) {
        return null
    }

    task.title = data.title || task.title
    task.description = data.description || task.description
    task.status = data.status || task.status
    task.priority = data.priority || task.priority
    task.updatedAt = new Date().toISOString()

    return task
}

// Delete task
exports.deleteTask = (id) => {

    const taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex === -1) {
        return null
    }

    return tasks.splice(taskIndex, 1)[0]
}