const mongoose = require("mongoose")
const userService = require("../services/userService")

// GET all users
exports.getUser = async (req, res, next) => {
    try {
        const users = await userService.getUser()

        res.status(200).json({
            success: true,
            data: users
        })
    } catch (err) {
        next(err)
    }
}

// GET user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id)

        if (!user) {
            const error = new Error("User not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        next(err)
    }
}

// POST create user
exports.createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body)

        res.status(201).json({
            success: true,
            data: user
        })
    } catch (err) {
        next(err)
    }
}

// PATCH update user
exports.updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body)

        if (!user) {
            const error = new Error("User not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        next(err)
    }
}

// DELETE user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id)

        if (!user) {
            const error = new Error("User not found")
            error.statusCode = 404
            return next(error)
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (err) {
        next(err)
    }
}