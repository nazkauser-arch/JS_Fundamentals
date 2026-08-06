const validateTask = (req, res, next) => {
    const { title, description, status, priority } = req.body

    if (!title || !description || !status || !priority) {
        const error = new Error("All fields are required")
        error.statusCode = 400
        return next(error)
    }

    next()
}

module.exports = validateTask