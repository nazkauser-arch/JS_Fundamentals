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

app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`)
})