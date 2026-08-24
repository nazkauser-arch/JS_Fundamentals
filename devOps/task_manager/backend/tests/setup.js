require("dotenv").config({ path: "./.env" })

const mongoose = require("mongoose")

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_TEST_URI)
})

beforeEach(async () => {
  await mongoose.connection.collection("users").deleteMany({})
  await mongoose.connection.collection("tasks").deleteMany({})
})

afterAll(async () => {
  await mongoose.connection.close()
})