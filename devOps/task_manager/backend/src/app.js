const express = require("express")
const cors = require("cors")

const taskRoutes = require("./routes/taskRoutes")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const healthRoutes = require("./routes/healthRoutes")
const logger = require("./middleware/logger")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")


const app = express()

app.use(express.json())

app.use(logger)

app.use(cors({
  origin: "http://localhost:8080"
}))


app.use("/api/tasks", taskRoutes)

app.use("/api/users", userRoutes)

app.use("/api/auth", authRoutes)

app.use("/health", healthRoutes)

app.use(notFound)

app.use(errorHandler)

module.exports = app