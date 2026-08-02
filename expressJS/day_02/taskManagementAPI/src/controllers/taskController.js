const taskService = require("../services/taskService")

// GET all tasks
exports.getTasks = (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const tasks = taskService.getAllTasks(page, limit)

        res.status(200).json({
            success: true,
            data: tasks
        })
    } catch (error) {
        next(error)
    }
}

// GET one task
exports.getTaskById = (req, res, next) => {
    try {
        const task = taskService.getTaskById(req.params.id)

        if (!task) {
            const error = new Error("Task not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            data: task
        })
    } catch (error) {
        next(error)
    }
}

// POST create task
exports.createTask = (req, res, next) => {
    try {
        const newTask = taskService.createTask(req.body)

        res.status(201).json({
            success: true,
            data: newTask
        })
    } catch (error) {
        next(error)
    }
}

// PATCH update task
exports.updateTask = (req, res, next) => {
    try {
        const updatedTask = taskService.updateTask(
            req.params.id,
            req.body
        )

        if (!updatedTask) {
            const error = new Error("Task not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            data: updatedTask
        })
    } catch (error) {
        next(error)
    }
}

// DELETE task
exports.deleteTask = (req, res, next) => {
    try {
        const deletedTask = taskService.deleteTask(req.params.id)

        if (!deletedTask) {
            const error = new Error("Task not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            data: deletedTask
        })
    } catch (error) {
        next(error)
    }
}