const express = require("express")

const app = express()

const PORT = 3000

app.use(express.json())

const tasks = [
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

//GET all tasks
app.get("/api/tasks", (req, res) => {
    res.status(200).json({
        success: true,
        data: tasks
    })
})

//GET one task
app.get("/api/tasks/:id", (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)

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
})

//POST create task
app.post("/api/tasks", (req, res) => {
    const newTask = {
        id: String(tasks.length + 1),
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask)

    res.status(201).json({
        success: true,
        data: newTask
    })
})

//PATCH update task
app.patch("/api/tasks/:id", (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)

    if (!task) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Task not found"
            }
        })
    }

    task.title = req.body.title || task.title
    task.description = req.body.description || task.description
    task.status = req.body.status || task.status
    task.priority = req.body.priority || task.priority
    task.updatedAt = new Date().toISOString()

    res.status(200).json({
        success: true,
        data: task
    })
})

//DELETE task
app.delete("/api/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === req.params.id)

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Task not found"
            }
        })
    }

    const deletedTask = tasks.splice(taskIndex, 1)

    res.status(200).json({
        success: true,
        data: deletedTask[0]
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})