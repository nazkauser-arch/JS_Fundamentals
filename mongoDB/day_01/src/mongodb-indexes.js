const { connectDB, getDB } = require("./config/db")

const createIndexes = async () => {
    await connectDB()

    const db = getDB()

    const usersCollection = db.collection("users")
    const tasksCollection = db.collection("tasks")

    // 1. A unique index on the user’s email
    const userEmail = await usersCollection.createIndex({
        email: 1
    })

    console.log(userEmail)

    // 2. An index on the task’s ownerId
    const taskOwnerID = await tasksCollection.createIndex({
        ownerId: 1
    })

    console.log(taskOwnerID)

    // 3. A compound index on: {ownerId, status}
    const compoundIndex = await tasksCollection.createIndex({
        ownerId: 1,
        status: 1
    })

    console.log(compoundIndex)

    // 4. An index suitable for searching or sorting tasks by createdAt
    const taskCreatedAt = await tasksCollection.createIndex({
        createdAt: 1
    })

    console.log(taskCreatedAt)




}

createIndexes()