const request = require("supertest")
const app = require("../src/app")

describe("POST /api/auth/register", () => {
  test("returns 201 when a user is registered successfully", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123"
      })

    expect(response.statusCode).toBe(201)
  })

  test("returns 409 when registering with a duplicate email", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123"
      })

    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Another User",
        email: "test@example.com",
        password: "password456"
      })

    expect(response.statusCode).toBe(409)
  })  

  test("returns 400 when registering with amissing field", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User"
      })

    expect(response.statusCode).toBe(400)
  })
})