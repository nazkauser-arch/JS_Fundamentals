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

while (true) {
    let choice = menu()
    if (choice === 9) {
        console.log("Exiting task manager...")
        break
    } else if (choice === 1) {
        tasks = addTask(tasks)
        saveTasks(tasks)
    } else if (choice === 2) {
        tasks = deleteTask(tasks)
        saveTasks(tasks)
    } else if (choice === 3) {
        filterTasks(tasks)
    } else if (choice === 4) {
        tasks = markTask(tasks)
        saveTasks(tasks)
    } else if (choice === 5) {
        searchTasks(tasks)
    } else if (choice === 6) {
        sortTasks(tasks)
    } else if (choice === 7) {
        tasks = updateTask(tasks)
        saveTasks(tasks)
    } else if (choice === 8) {
        viewTask(tasks)
    } else {
        console.log("Invalid choice")
    }
}