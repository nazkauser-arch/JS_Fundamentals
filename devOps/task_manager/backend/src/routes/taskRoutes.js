const express = require("express")
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController")

const authMiddleware = require("../middleware/authMiddleware")
const validateTask = require("../middleware/validateTask")
const errorHandler = require("../middleware/errorHandler")

const router = express.Router()

router.use(authMiddleware)

router.get("/", getTasks)
router.get("/:id", getTaskById)
router.post("/", validateTask, createTask)
router.patch("/:id", validateTask, updateTask)
router.delete("/:id", deleteTask)

module.exports = router