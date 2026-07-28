const menu = require("./menu")
const loadTasks = require("./utils/loadTasks")
const saveTasks = require("./utils/saveTasks")

const addTask = require("./services/addTask")
const deleteTask = require("./services/deleteTask")
const filterTasks = require("./services/filterTasks")
const markTask = require("./services/markTask")
const searchTasks = require("./services/searchTasks")
const sortTasks = require("./services/sortTasks")
const updateTask = require("./services/updateTask")
const viewTask = require("./services/viewTask")

let tasks = loadTasks()

let choice = menu()
if (choice === 1) {
    tasks = addTask(tasks)
    saveTasks(tasks)
    console.log("Task added successfully")
} else if (choice === 2) {
    tasks = deleteTask(tasks)
    saveTasks(tasks)
} else if (choice === 3) {
    filterTasks()
} else if (choice === 4) {
    tasks = markTask(tasks)
    saveTasks(tasks)
} else if (choice === 5) {
    searchTasks(tasks)
} else if (choice === 6) {
    sortTasks()
} else if (choice === 7) {
    tasks = updateTask(tasks)
    saveTasks(tasks)
} else if (choice === 8) {
    viewTask(tasks)
}
