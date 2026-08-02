const express = require("express")
const taskRoutes = require("./routes/taskRoutes")
const logger = require("./middleware/logger")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")


const app = express()

app.use(express.json())

app.use(logger)

app.use("/api/tasks", taskRoutes)

app.use(notFound)

app.use(errorHandler)

module.exports = app