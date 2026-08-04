const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100
        },

        description: {
            type: String,
            trim: true,
            maxlength: 500,
            default: ""
        },

        status: {
            type: String,
            default: "pending",
            enum: ["pending", "in_progress", "completed"]
        },

        priority: {
            type: String,
            default: "medium",
            enum: ["low", "medium", "high"]
        },
        
        // TODO: Replace this with authenticated user's ID after authentication is implemented
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        dueDate: {
            type: Date,
            validate: {
                validator: (date) => date >= new Date()
            }
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Task", taskSchema)