const Task = require("../models/taskModel")

// Get all tasks
exports.getAllTasks = async (filters) => {
    const {
        search,
        status,
        priority,
        ownerId,
        sortBy,
        page = 1,
        limit = 10
    } = filters

    const query = {}

    if (search) {
        query.title = {
            $regex: search,
            $options: "i"
        }
    }

    if (status) {
        query.status = status
    }

    if (priority) {
        query.priority = priority
    }

    if (ownerId) {
        query.ownerId = ownerId
    }

    let sort = {}

    if (sortBy === "createdAt") {
        sort.createdAt = -1
    }

    if (sortBy === "dueDate") {
        sort.dueDate = 1
    }

    const skip = (page - 1) * limit

    const tasks = await Task.find(query)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))

    const totalItems = await Task.countDocuments(query)

    return {
        tasks,
        pagination: {
            page: Number(page),
            limit: Number(limit),
            totalItems,
            totalPages: Math.ceil(totalItems / limit)
        }
    }
}

// Get task by id
exports.getTaskById = async (id) => {
    return await Task.findById(id)
}

// Create new task
exports.createTask = async(taskData) => {
    const task = new Task(taskData)

    return await task.save()
}

// Update a task
exports.updateTask = async (id, updateData) => {
    return await Task.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    )
}

// Delete a task
exports.deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id)
}
