const validateTask = (req, res, next) => {
    if (req.method === "POST") {
        const { title, description, status, priority } = req.body

        if (!title || !description || !status || !priority) {
            const error = new Error("All fields are required")
            error.statusCode = 400
            return next(error)
        }
    }

    if (req.method === "PATCH") {
        const allowedFields = [
            "title",
            "description",
            "status",
            "priority",
            "dueDate"
        ]

        const hasValidField = Object.keys(req.body)
            .some(field => allowedFields.includes(field))

        if (!hasValidField) {
            const error = new Error("No valid fields to update")
            error.statusCode = 400
            return next(error)
        }
    }

    next()
}

module.exports = validateTask