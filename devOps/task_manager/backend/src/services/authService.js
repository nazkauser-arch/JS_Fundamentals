const User = require("../models/userModel")
const generateToken = require("../utils/token")
const bcrypt = require("bcrypt")

exports.registerUser = async (userData) => {
    const { name, email, password, role } = userData

    if (!name || !email || !password) {
        const error = new Error("Name, email and password are required")
        error.statusCode = 400
        throw error
    }

    if (role === "admin") {
        const error = new Error("Cannot register as admin")
        error.statusCode = 403
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    return await User.create({
        name,
        email,
        password: hashedPassword,
        role: "user"
    })
}

exports.loginUser = async (email, password) => {
    const user = await User.findOne({email})

    if (!user) {
        const error = new Error("Invalid email or password")
        error.statusCode = 401
        throw error
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        const error = new Error("Invalid email or password")
        error.statusCode = 401
        throw error
    }

    const token = generateToken(user)

    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }, token
    }
}