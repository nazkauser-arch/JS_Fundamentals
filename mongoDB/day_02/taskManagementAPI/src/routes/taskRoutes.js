const express = require("express")
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController")

const validateTask = require("../middleware/validateTask")
const errorHandler = require("../middleware/errorhandler")

const router = express.Router()

router.get("/", getTasks)
router.get("/:id", errorHandler, getTaskById)
router.post("/", validateTask, createTask)
router.patch("/:id", validateTask, updateTask)
router.delete("/:id", deleteTask)

module.exports = router