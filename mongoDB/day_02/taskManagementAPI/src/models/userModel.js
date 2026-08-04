const mongoose = require("mongoose")

const userSchema = new Mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        required: true,
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})