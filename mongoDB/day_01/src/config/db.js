require("dotenv").config()

const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

let db

const connectDB = async () => {
    try {
        await client.connect()

        db = client.db(process.env.DB_NAME)

        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

const getDB = () => db

module.exports = {
    connectDB,
    getDB
}