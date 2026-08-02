let tasks = [
    {
        id: "1",
        title: "Learn Express",
        description: "Complete the Express assignment",
        status: "pending",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "2",
        title: "Build REST API",
        description: "Implement CRUD operations",
        status: "completed",
        priority: "medium",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "3",
        title: "Write Documentation",
        description: "Update the project README",
        status: "pending",
        priority: "low",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "4",
        title: "Test API",
        description: "Test all endpoints using Postman",
        status: "pending",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "5",
        title: "Refactor Code",
        description: "Separate routes, controllers and services",
        status: "completed",
        priority: "medium",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

// Get all tasks
exports.getAllTasks = (page, limit) => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return tasks.slice(startIndex, endIndex)
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