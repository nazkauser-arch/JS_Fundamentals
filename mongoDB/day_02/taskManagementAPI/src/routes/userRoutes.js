const express = require("express")
const {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require ("../controllers/userController")

const router = express.Router()

router.get("/", getUser)
router.get("/:id", getUserById)
router.post("/", createUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router