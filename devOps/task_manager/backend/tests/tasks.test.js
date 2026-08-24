const request = require("supertest")
const app = require("../src/app")

describe("POST /api/tasks", () => {
  it("returns 201 when creating a valid task", async () => {
    // Arrange
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Task User",
        email: "task@example.com",
        password: "password123"
      })

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({
        email: "task@example.com",
        password: "password123"
      })

    const token = loginResponse.body.data.token

    // Act
    const response = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Test Task",
        description: "This is a test task",
        priority: "high",
        status: "pending",
        dueDate: "2026-08-28"
      })

    // Assert
    expect(response.statusCode).toBe(201)
    })

  it("returns 401 when creating a task without authentication", async () => {
    const task = {
        title: "Unauthorized Task",
        description: "This task should not be created",
        status: "pending",
        priority: "medium",
        dueDate: "2026-08-28"
    }

    const response = await request(app)
        .post("/api/tasks")
        .send(task)

    expect(response.statusCode).toBe(401)
    })

  it("returns 400 when creating a task with invalid data", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Task User",
        email: "invalid-task@example.com",
        password: "password123"
      })

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({
        email: "invalid-task@example.com",
        password: "password123"
      })

    const token = loginResponse.body.data.token

    const response = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Hi",
        priority: "invalid"
      })

    expect(response.statusCode).toBe(400)
    })

  it("returns the logged-in user's tasks", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Task User",
        email: "gettasks@example.com",
        password: "password123"
      })

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({
        email: "gettasks@example.com",
        password: "password123"
      })

    const token = loginResponse.body.data.token

    await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "My Test Task",
        description: "Task for testing",
        status: "pending",
        priority: "medium",
        dueDate: "2026-08-28"
      })

    const response = await request(app)
      .get("/api/tasks")
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(response.body.data).toHaveLength(1)
    expect(response.body.data[0].title).toBe("My Test Task")
    })

  it("returns 403 when accessing another user's task", async () => {
    await request(app)
        .post("/api/auth/register")
        .send({
            name: "User One",
            email: "userone@example.com",
            password: "password123"
        })

    const userOneLogin = await request(app)
        .post("/api/auth/login")
        .send({
            email: "userone@example.com",
            password: "password123"
        })

    const userOneToken = userOneLogin.body.data.token

    const taskResponse = await request(app)
        .post("/api/tasks")
        .set("Authorization", `Bearer ${userOneToken}`)
        .send({
            title: "User One Task",
            description: "Private task",
            status: "pending",
            priority: "medium",
            dueDate: "2026-08-28"
        })

    const taskId = taskResponse.body.data._id

    await request(app)
        .post("/api/auth/register")
        .send({
            name: "User Two",
            email: "usertwo@example.com",
            password: "password123"
        })

    const userTwoLogin = await request(app)
        .post("/api/auth/login")
        .send({
            email: "usertwo@example.com",
            password: "password123"
        })

    const userTwoToken = userTwoLogin.body.data.token

    const response = await request(app)
        .get(`/api/tasks/${taskId}`)
        .set("Authorization", `Bearer ${userTwoToken}`)

    expect(response.statusCode).toBe(404)
    })

    it("returns 200 when deleting a task", async () => {
        await request(app)
        .post("/api/auth/register")
        .send({
            name: "Delete User",
            email: "delete@example.com",
            password: "password123"
        })

    const loginResponse = await request(app)
        .post("/api/auth/login")
        .send({
            email: "delete@example.com",
            password: "password123"
        })

    const token = loginResponse.body.data.token

    const taskResponse = await request(app)
        .post("/api/tasks")
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: "Task To Delete",
            description: "This task will be deleted",
            status: "pending",
            priority: "medium",
            dueDate: "2026-08-28"
        })

    const taskId = taskResponse.body.data._id

    const response = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(response.body.success).toBe(true)
    })
})