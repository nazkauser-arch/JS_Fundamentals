const Task = require("../models/taskModel")

// Get all tasks
exports.getAllTasks = async (filters, ownerId) => {
    const {
        search,
        status,
        priority,
        sortBy,
        page = 1,
        limit = 10
    } = filters

    const query = {
        ownerId
    }

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
exports.getTaskById = async (id, ownerId) => {
    return await Task.findOne({
        _id: id,
        ownerId
    })
}

// Create new task
exports.createTask = async(taskData) => {
    const task = new Task(taskData)

    return await task.save()
}

// Update a task
exports.updateTask = async (taskId, ownerId, updates) => {
  return await Task.findOneAndUpdate(
    {
      _id: taskId,
      ownerId: ownerId
    },
    updates,
    {
      new: true,
      runValidators: true
    }
  )
}

// Delete a task
exports.deleteTask = async (taskId, ownerId) => {
  return await Task.findOneAndDelete({
    _id: taskId,
    ownerId: ownerId
  })
}
