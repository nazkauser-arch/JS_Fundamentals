const express = require("express")
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController")

const validateTask = require("../middleware/validateTask")

const router = express.Router()

router.get("/", getTasks)
router.get("/:id", getTaskById)
router.post("/", validateTask, createTask)
router.patch("/:id", validateTask, updateTask)
router.delete("/:id", deleteTask)

module.exports = router