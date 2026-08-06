const errorHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500
    let message = err.message || "Internal Server Error"

    // Duplicate key error (e.g. duplicate email)
    if (err.code === 11000) {
        statusCode = 409

        if (err.keyPattern.email) {
            message = "Email already exists"
        } else {
            message = "Duplicate value already exists"
        }
    }

    // Invalid MongoDB ObjectId / Invalid date format
    else if (err.name === "CastError") {
        statusCode = 400

        if (err.path === "_id") {
            message = "Invalid MongoDB ID"
        } else if (err.path === "dueDate") {
            message = "Invalid date format"
        }
    }

    // Mongoose validation errors
    else if (err.name === "ValidationError") {
        statusCode = 400

        const errors = Object.values(err.errors)

        const messages = errors.map(error => {
            if (error.path === "ownerId") {
                return "Owner ID is required"
            }

            if (error.path === "dueDate") {
                return "Date cannot be from the past"
            }

            return error.message
        })

        message = messages.join(", ")
    }

    res.status(statusCode).json({
        success: false,
        error: {
            message
        }
    })
}

module.exports = errorHandler