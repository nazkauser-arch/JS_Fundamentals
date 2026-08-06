const mongoose = require("mongoose")
const taskService = require("../services/taskService")
const userService = require("../services/userService")


// GET all tasks
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks(req.query)

        res.status(200).json({
            success: true,
            data: tasks.tasks,
            pagination: tasks.pagination
        })

    } catch (error) {
        next(error)
    }
}

// GET one task
exports.getTaskById = async (req, res, next) => {
    try {

        const task = await taskService.getTaskById(req.params.id)

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
exports.createTask = async (req, res, next) => {
    try {
        const {ownerId} = req.body

        const user = await userService.getUserById(ownerId)

        if (!user) {
            const error = new Error("Owner not found")
            error.statusCode = 404
            return next(error)
        }
        
        const task = await taskService.createTask(req.body)

        res.status(201).json({
            success: true,
            data: task
        })

    } catch (error) {
        next(error)
    }
}

// PATCH update task
exports.updateTask = async (req, res, next) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: {
                    message: "Invalid task ID"
                }
            })
        }

        const allowedUpdates = [
            "title",
            "description",
            "status",
            "priority",
            "dueDate"
        ]

        const updates = {}

        for (const key of allowedUpdates) {
            if (req.body[key] !== undefined) {
                updates[key] = req.body[key]
            }
        }

        const task = await taskService.updateTask(id, updates)

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

    } catch (error) {
        next(error)
    }
}

// DELETE task
exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: {
                    message: "Invalid task ID"
                }
            })
        }

        const task = await taskService.deleteTask(id)

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

    } catch (error) {
        next(error)
    }
}