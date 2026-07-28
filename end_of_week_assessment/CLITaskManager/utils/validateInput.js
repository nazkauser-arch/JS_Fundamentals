function validateTitle(title) {
    if (title.trim() === "") {
        return false
    }
    return true
}

function validatePriority(priority) {
    if (priority !== "high" && priority !== "medium" && priority !== "low") {
        return false
    }
    return true
}

module.exports = {
    validateTitle,
    validatePriority
}
