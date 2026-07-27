const menu = require("./menu")

const addTask = require("./services/addTask")
const deleteask = require("./services/deleteTask")
const filterTasks = require("./services/filterTasks")
const markTask = require("./services/markTask")
const searchTasks = require("./services/searchTasks")
const sortTasks = require("./services/sortTasks")
const updateTask = require("./services/updateTask")
const viewTask = require("./services/viewTask")

let choice = menu()
if (choice === 1) {
    addTask()
} else if (choice === 2) {
    deleteTask()
} else if (choice === 3) {
    filterTasks()
} else if (choice === 4) {
    markTask()
} else if (choice === 5) {
    searchTasks()
} else if (choice === 6) {
    sortTasks()
} else if (choice === 7) {
    updateTask()
} else if (choice === 8) {
    viewTask()
}
