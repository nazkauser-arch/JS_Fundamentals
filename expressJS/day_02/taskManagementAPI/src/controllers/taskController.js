const taskService = require("../services/taskService")

// GET all tasks
exports.getTasks = (req, res) => {

    const tasks = taskService.getAllTasks()

    res.status(200).json({
        success: true,
        data: tasks
    })
}

// GET one task
exports.getTaskById = (req, res) => {

    const task = taskService.getTaskById(req.params.id)

    if (!task) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Task not found"
            }
        })
    }

    res.status(200).json({
        success: true,
        data: task
    })
}

// POST create task
exports.createTask = (req, res) => {

    const newTask = taskService.createTask(req.body)

    res.status(201).json({
        success: true,
        data: newTask
    })
}

// PATCH update task
exports.updateTask = (req, res) => {

    const updatedTask = taskService.updateTask(
        req.params.id,
        req.body
    )

    if (!updatedTask) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Task not found"
            }
        })
    }

    res.status(200).json({
        success: true,
        data: updatedTask
    })
}

// DELETE task
exports.deleteTask = (req, res) => {

    const deletedTask = taskService.deleteTask(req.params.id)

    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Task not found"
            }
        })
    }

    res.status(200).json({
        success: true,
        data: deletedTask
    })
}