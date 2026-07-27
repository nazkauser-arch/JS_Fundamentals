const prompt = require("prompt-sync")()

function menu() {
    console.log("1. Add Task")
    console.log("2. Delete Task")
    console.log("3. Filter Tasks")
    console.log("4. Mark Task")
    console.log("5. Search Tasks")
    console.log("6. Sort Tasks")
    console.log("7. Update Task")
    console.log("8. View Tasks")
    console.log("9. Exit")

    const choice = Number(prompt("Enter choice: "))
    return choice
}

module.exports = menu