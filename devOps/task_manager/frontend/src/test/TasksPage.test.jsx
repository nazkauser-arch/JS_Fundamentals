import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { test, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import TasksPage from "../pages/tasksPage"
import { getTasks } from "../api/taskApi"
import { updateTask } from "../api/taskApi"

vi.mock("../api/taskApi", () => ({
  getTasks: vi.fn(() => new Promise(() => {})),
  updateTask: vi.fn()
}))

vi.mock("../hooks/useAuth", () => ({
  default: vi.fn(() => ({
    logout: vi.fn(),
    user: {
      name: "Test User",
      email: "test@example.com"
    }
  }))
}))

test("task page shows a loading message", () => {
  localStorage.setItem("token", "test-token")

  render(
    <MemoryRouter>
      <TasksPage />
    </MemoryRouter>
  )

  expect(screen.getByText("Loading tasks...")).toBeInTheDocument()
})

test("task page shows an error message when tasks fail to load", async () => {
  getTasks.mockRejectedValueOnce(new Error("API error"))

  localStorage.setItem("token", "test-token")

  render(
    <MemoryRouter>
      <TasksPage />
    </MemoryRouter>
  )

  expect(
    await screen.findByText("Unable to load tasks. Please try again.")
  ).toBeInTheDocument()
})

test("task page displays tasks when API succeeds", async () => {
  getTasks.mockResolvedValue({
    data: [
      {
        _id: "1",
        title: "Learn testing",
        description: "Write frontend tests",
        status: "pending",
        priority: "high"
      }
    ],
    pagination: {
      totalPages: 1
    }
  })

  localStorage.setItem("token", "test-token")

  render(
    <MemoryRouter>
      <TasksPage />
    </MemoryRouter>
  )

  expect(
    await screen.findByText("Learn testing")
  ).toBeInTheDocument()
})

test("clicking complete updates the task status", async () => {
  const user = userEvent.setup()

  getTasks.mockResolvedValue({
    data: [
      {
        _id: "1",
        title: "Learn testing",
        description: "Write frontend tests",
        status: "pending",
        priority: "high"
      }
    ],
    pagination: {
      totalPages: 1
    }
  })

  updateTask.mockResolvedValue({
    data: {
      _id: "1",
      title: "Learn testing",
      description: "Write frontend tests",
      status: "completed",
      priority: "high"
    }
  })

  localStorage.setItem("token", "test-token")

  render(
    <MemoryRouter>
      <TasksPage />
    </MemoryRouter>
  )

  const completeButton = await screen.findByRole("button", {
    name: /complete/i
  })

  await user.click(completeButton)

  expect(updateTask).toHaveBeenCalledWith(
    "1",
    { status: "completed" },
    "test-token"
  )
})

test("clicking next changes the page", async () => {
  const user = userEvent.setup()

  getTasks.mockResolvedValue({
    data: [
      {
        _id: "1",
        title: "Learn testing",
        status: "pending",
        priority: "high"
      }
    ],
    pagination: {
      totalPages: 2
    }
  })

  localStorage.setItem("token", "test-token")

  render(
    <MemoryRouter>
      <TasksPage />
    </MemoryRouter>
  )

  expect(
    await screen.findByText("Page 1")
  ).toBeInTheDocument()

  const nextButton = screen.getByRole("button", {
    name: "Next"
  })

  await user.click(nextButton)

  expect(
    await screen.findByText("Page 2")
  ).toBeInTheDocument()
})