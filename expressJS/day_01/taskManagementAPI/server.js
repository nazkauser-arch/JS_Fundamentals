const express = require("express")

const app = express()

const PORT = 3000

app.use(express.json())

const tasks = [
    {
        id: "1",
        title: "Learn express",
        description: "Complete the express assignment",
        status: "pending",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

app.get("/api/tasks", (req, res) => {
    res.json(tasks)
})

app.get("/api/tasks/:id", (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        })
    }
    res.json(task)
})

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

    res.status(201).json(newTask)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`)
})