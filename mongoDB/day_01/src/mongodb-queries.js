const { ObjectId } = require("mongodb")
const { connectDB, getDB } = require("./config/db")

const runQueries = async () => {

    await connectDB()

    const db = getDB()

    const usersCollection = db.collection("users")
    const tasksCollection = db.collection("tasks")

    // 1. Insert one user
    const oneUserInsertResult = await usersCollection.insertOne({
        name: "Ahmed Ali",
        email: "ahmed@example.com",
        role: "user",
        createdAt: new Date()
    })

    console.log("Inserted user ID: ", oneUserInsertResult.insertedId)

    // 2. Insert multiple tasks in one operation
    const multipleTasksInsertResult = await tasksCollection.insertMany([{
    title: "Complete MongoDB assignment",
    description: "Practice MongoDB queries and database design",
    status: "pending",
    priority: "high",
    ownerId: "6a707fb01c547058dab611a1",
    dueDate: new Date("2026-08-10"),
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: "Learn MongoDB aggregation",
    description: "Practice aggregation pipeline and grouping operations",
    status: "in-progress",
    priority: "medium",
    ownerId: "6a70b3548be473a893b57d8d",
    dueDate: new Date("2026-08-15"),
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: "Build Express MongoDB connection",
    description: "Connect Express application with MongoDB database",
    status: "completed",
    priority: "low",
    ownerId: "6a70835c1c547058dab611a3",
    dueDate: new Date("2026-08-20"),
    createdAt: new Date(),
    updatedAt: new Date()
    }])

    console.log("Inserted tasks")

    // 3. Get all users
    const allUsers = await usersCollection.find().toArray()

    console.log(allUsers)

    // 4. Get all tasks
    const allTasks = await tasksCollection.find().toArray()

    console.log(allTasks)

    // 5. Get one task by its _id
    const oneTask = await tasksCollection.findOne({
        _id: new ObjectId("6a70b5904901008f6ac5130d")
    })

    console.log(oneTask)

    // 6. Get all tasks belonging to a particular user
    let userId = new ObjectId("6a70835c1c547058dab611a3")
    const allTasksOneUser = await tasksCollection.find({
        ownerId: userId
    }).toArray()

    console.log(allTasksOneUser)

    // 7. Get all pending tasks
    let taskStatus = "pending"
    const pendingTasks = await tasksCollection.find({
        status: "pending"
    }).toArray()

    console.log(pendingTasks)

    // 8. Get all high-priority pending tasks
    const taskPriority = "high"
    let taskStatus = "pending" 
    const highPriorityPendingTasks = await tasksCollection.find({
        priority: "high",
        status: "pending"
    }).toArray()

    console.log(highPriorityPendingTasks)

    // 9. Get all completed tasks belonging to one user
    let userId = new ObjectId("6a70835c1c547058dab611a3")
    let taskStatus = "completed"
    const completedTasksUser = await tasksCollection.find({
        ownerId: userId,
        status: taskStatus
    }).toArray()

    console.log(completedTasksUser)

    // 10. Search task titles using a case-insensitive search
    const searchText = "mongodb"
    const tasks = await tasksCollection.find({
        title: {
            $regex: searchText,
            $options: "i"
        }
    }).toArray()

    console.log(tasks)

    // 11. Get tasks due before a particular date
    const date = new Date("2026-08-15")

    const tasksBeforeDate = await tasksCollection.find({
        dueDate: {
            $lt: date
        }
    }).toArray()

    console.log(tasksBeforeDate)

    // 12. Update the status of one task
    let taskId = new ObjectId("6a708a4a1c547058dab611ba")
    const updateOneTask = await tasksCollection.updateOne({
        _id: taskId
    },
    {
        $set:{
            status: "completed",
            updatedAt: new Date()
            }
        }
    )
    if (updateOneTask.modifiedCount > 0) {
        console.log(`Task with ID ${taskId} updated successfully`)
    } else {
        console.log("Task not found or no changes made")
    }

    // 13. Update the priority and due date of one task
    let taskPriority = "high"
    let dueDate = new Date("2026-08-18")
    let taskId = new ObjectId("6a708af21c547058dab611bf")
    const updateDatePriority = await tasksCollection.updateOne({
        _id: taskId
    },
    {
        $set: {
            priority: taskPriority,
            dueDate: dueDate
            }
        }
    )
    if (updateDatePriority.modifiedCount > 0) {
        console.log(`Task with ID ${taskId} updated successfully`)
    } else {
        console.log("Task not found or no changes made")
    }

    // 14. Delete one task by its ID
    const taskId = new ObjectId("6a70b5904901008f6ac5130d")

    const deleteTask = await tasksCollection.deleteOne({
        _id: taskId
    })

    if (deleteTask.deletedCount > 0) {
        console.log("Task deleted successfully")
    } else {
        console.log("Task not found")
    }

    // 15. Sort tasks by newest first
    const newestTasks = await tasksCollection.find()
        .sort({
            createdAt: -1
        }).toArray()

    console.log(newestTasks)

    // 16. Sort tasks by due date
    const newestTasks = await tasksCollection.find()
        .sort({
            dueDate: 1
        })
        .toArray()

    console.log(newestTasks)

    // 17. Return only the first five tasks
    const firstFiveTasks = await tasksCollection.find().limit(5).toArray()

    console.log(firstFiveTasks)

    // 18. Skip the first five tasks and return the next five

    const secondFiveTasks = await tasksCollection.find().skip(5).limit(5).toArray()

    console.log(secondFiveTasks)

    // 19. Count tasks by status
    const tasksByStatus = await tasksCollection.aggregate([
        {
            $group: {
                _id: "$status",
                count: {
                    $sum: 1
                }
            }
        }
    ]).toArray()

    console.log(tasksByStatus)

    // 20. Count tasks belonging to each user
    const tasksByUser = await tasksCollection.aggregate([
        {
            $group: {
                _id: "$ownerId",
                totalTasks: {
                    $sum: 1
                }
            }
        }
    ]).toArray()

    console.log(tasksByUser)

    // 21. Group tasks by priority
    const tasksByPriority = await tasksCollection.aggregate([
        {
            $group: {
                _id: "$priority",
                tasks: {
                   $push: {
                    title: "$title",
                    status: "$status",
                    priority: "$priority"
                    }
                }
            }
        }
    ]).toArray()

    console.log(JSON.stringify(tasksByPriority, null, 2))

    // 22. Return each user’s total number of tasks
    const userTaskCount = await tasksCollection.aggregate([
        {
            $group: {
                _id: "$ownerId",
                totalTasks: {
                    $sum: 1
                }
            }
        }
    ]).toArray()

    console.log(userTaskCount)    

    // 23. Return only users who have more than three tasks
    const usersWithMoreTasks = await tasksCollection.aggregate([
        {
            $group: {
                _id: "$ownerId",
                totalTasks: {
                    $sum: 1
                }
            }
        },
        {
            $match: {
                totalTasks: {
                    $gt: 3
                }
            }
        }
    ]).toArray()

    console.log(usersWithMoreTasks)

    // Query with/without index
    const result = await  tasksCollection.find({ ownerId: new ObjectId("6a70835c1c547058dab611a3") }).explain("executionStats")
    console.log(result)


}

runQueries()