let tasks = [
    {
        id: "1",
        title: "Learn Express",
        description: "Complete Express.js fundamentals",
        status: "pending",
        priority: "high",
        createdAt: "2026-08-01T09:00:00.000Z",
        updatedAt: "2026-08-01T09:00:00.000Z"
    },
    {
        id: "2",
        title: "Build REST API",
        description: "Create CRUD endpoints for task manager",
        status: "completed",
        priority: "medium",
        createdAt: "2026-08-01T10:00:00.000Z",
        updatedAt: "2026-08-01T10:00:00.000Z"
    },
    {
        id: "3",
        title: "Learn Middleware",
        description: "Understand Express middleware flow",
        status: "pending",
        priority: "high",
        createdAt: "2026-08-01T11:00:00.000Z",
        updatedAt: "2026-08-01T11:00:00.000Z"
    },
    {
        id: "4",
        title: "Test APIs with Postman",
        description: "Test all API endpoints",
        status: "completed",
        priority: "high",
        createdAt: "2026-08-01T12:00:00.000Z",
        updatedAt: "2026-08-01T12:00:00.000Z"
    },
    {
        id: "5",
        title: "Write Documentation",
        description: "Create project README documentation",
        status: "pending",
        priority: "medium",
        createdAt: "2026-08-01T13:00:00.000Z",
        updatedAt: "2026-08-01T13:00:00.000Z"
    },
    {
        id: "6",
        title: "Add Error Handling",
        description: "Implement centralized error middleware",
        status: "completed",
        priority: "high",
        createdAt: "2026-08-01T14:00:00.000Z",
        updatedAt: "2026-08-01T14:00:00.000Z"
    },
    {
        id: "7",
        title: "Implement Pagination",
        description: "Add page and limit support",
        status: "pending",
        priority: "low",
        createdAt: "2026-08-01T15:00:00.000Z",
        updatedAt: "2026-08-01T15:00:00.000Z"
    },
    {
        id: "8",
        title: "Review Code Structure",
        description: "Review routes controllers and services",
        status: "pending",
        priority: "high",
        createdAt: "2026-08-02T09:00:00.000Z",
        updatedAt: "2026-08-02T09:00:00.000Z"
    },
    {
        id: "9",
        title: "Learn Environment Variables",
        description: "Configure application using dotenv",
        status: "completed",
        priority: "medium",
        createdAt: "2026-08-02T10:00:00.000Z",
        updatedAt: "2026-08-02T10:00:00.000Z"
    },
    {
        id: "10",
        title: "Create Validation Middleware",
        description: "Validate incoming task data",
        status: "pending",
        priority: "high",
        createdAt: "2026-08-02T11:00:00.000Z",
        updatedAt: "2026-08-02T11:00:00.000Z"
    },
    {
        id: "11",
        title: "Add Request Logger",
        description: "Log incoming API requests",
        status: "completed",
        priority: "low",
        createdAt: "2026-08-02T12:00:00.000Z",
        updatedAt: "2026-08-02T12:00:00.000Z"
    },
    {
        id: "12",
        title: "Improve API Responses",
        description: "Maintain consistent response format",
        status: "pending",
        priority: "medium",
        createdAt: "2026-08-02T13:00:00.000Z",
        updatedAt: "2026-08-02T13:00:00.000Z"
    },
    {
        id: "13",
        title: "Practice Git Commands",
        description: "Learn commits branches and merging",
        status: "completed",
        priority: "medium",
        createdAt: "2026-08-02T14:00:00.000Z",
        updatedAt: "2026-08-02T14:00:00.000Z"
    },
    {
        id: "14",
        title: "Deploy Application",
        description: "Deploy API to cloud platform",
        status: "pending",
        priority: "high",
        createdAt: "2026-08-02T15:00:00.000Z",
        updatedAt: "2026-08-02T15:00:00.000Z"
    },
    {
        id: "15",
        title: "Final API Testing",
        description: "Verify all endpoints before submission",
        status: "completed",
        priority: "low",
        createdAt: "2026-08-02T16:00:00.000Z",
        updatedAt: "2026-08-02T16:00:00.000Z"
    }
]

// Get all tasks
exports.getAllTasks = (page, limit, status, priority, sortBy) => {

    let result = [...tasks]

    if (status) {
        result = result.filter(task => task.status === status)
    }

    if (priority) {
        result = result.filter(task => task.priority === priority)
    }

    if (sortBy === "date") {
        result.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
    }

    if (sortBy === "priority") {
        const priorityOrder = {
            high: 1,
            medium: 2,
            low: 3
        }

        result.sort(
            (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        )
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return result.slice(startIndex, endIndex)
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

// Filter tasks by status and priority
exports.filterTasks = (status, priority) => {

    let filteredTasks = [...tasks]

    if (status) {
        filteredTasks = filteredTasks.filter(
            task => task.status === status
        )
    }

    if (priority) {
        filteredTasks = filteredTasks.filter(
            task => task.priority === priority
        )
    }

    return filteredTasks
}

// Sort tasks by creation date or priority
exports.sortTasks = (sortBy) => {

    let sortedTasks = [...tasks]

    if (sortBy === "date") {
        sortedTasks.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
    }


    if (sortBy === "priority") {

        const priorityOrder = {
            high: 1,
            medium: 2,
            low: 3
        }

        sortedTasks.sort(
            (a, b) =>
                priorityOrder[a.priority] -
                priorityOrder[b.priority]
        )
    }

    return sortedTasks
}