import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { describe, test, expect, vi, beforeEach } from "vitest"

import TasksPage from "../pages/tasksPage"
import {
  getTasks,
  updateTask
} from "../api/taskApi"

vi.mock("../api/taskApi", () => ({
  getTasks: vi.fn(),
  updateTask: vi.fn()
}))

vi.mock("../components/appHeader", () => ({
  default: () => <header>Task Manager</header>
}))

describe("TasksPage", () => {

  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })

  test("task page shows a loading message", async () => {
    localStorage.setItem("token", "test-token")

    getTasks.mockImplementation(
      () => new Promise(() => {})
    )

    render(
      <MemoryRouter>
        <TasksPage />
      </MemoryRouter>
    )

    expect(
      screen.getByText("Loading tasks...")
    ).toBeInTheDocument()
  })

  test("task page shows an error message when tasks fail to load", async () => {
    localStorage.setItem("token", "test-token")

    getTasks.mockRejectedValue(
      new Error("API error")
    )

    render(
      <MemoryRouter>
        <TasksPage />
      </MemoryRouter>
    )

    expect(
      await screen.findByText(
        "Unable to load tasks. Please try again."
      )
    ).toBeInTheDocument()
  })

  test("task page displays tasks when API succeeds", async () => {
    localStorage.setItem("token", "test-token")

    getTasks
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Learn testing",
            status: "pending",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 1
        }
      })
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Learn testing",
            status: "pending",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 1
        }
      })

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

    localStorage.setItem("token", "test-token")

    getTasks
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Learn testing",
            status: "pending",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 1
        }
      })
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Learn testing",
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
        status: "completed",
        priority: "high"
      }
    })

    render(
      <MemoryRouter>
        <TasksPage />
      </MemoryRouter>
    )

    expect(
      await screen.findByText("Learn testing")
    ).toBeInTheDocument()

    const completeButton = screen.getByRole("button", {
      name: "Complete"
    })

    await user.click(completeButton)

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: "Completed"
        })
      ).toBeInTheDocument()
    })

    expect(updateTask).toHaveBeenCalledWith(
      "1",
      { status: "completed" },
      "test-token"
    )
  })

  test("clicking next changes the page", async () => {
    const user = userEvent.setup()

    localStorage.setItem("token", "test-token")

    getTasks
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Task 1",
            status: "pending",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 2
        }
      })
      .mockResolvedValueOnce({
        data: [
          {
            _id: "1",
            title: "Task 1",
            status: "pending",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 1
        }
      })
      .mockResolvedValueOnce({
        data: [
          {
            _id: "2",
            title: "Task 2",
            status: "completed",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 2
        }
      })
      .mockResolvedValueOnce({
        data: [
          {
            _id: "2",
            title: "Task 2",
            status: "completed",
            priority: "high"
          }
        ],
        pagination: {
          totalPages: 1
        }
      })

    render(
      <MemoryRouter>
        <TasksPage />
      </MemoryRouter>
    )

    expect(
      await screen.findByText("Task 1")
    ).toBeInTheDocument()

    const nextButton = screen.getByRole("button", {
      name: "Next"
    })

    await user.click(nextButton)

    await waitFor(() => {
      expect(
        screen.getByText("Task 2")
      ).toBeInTheDocument()
    })

    expect(
      screen.getByText("Page 2")
    ).toBeInTheDocument()
  })

  test("changing the status filter updates the displayed tasks", async () => {
    const user = userEvent.setup()

    localStorage.setItem("token", "test-token")

    // Initial fetchTasks
    getTasks.mockResolvedValueOnce({
      data: [
        {
          _id: "1",
          title: "Pending Task",
          status: "pending",
          priority: "high"
        }
      ],
      pagination: {
        totalPages: 1
      }
    })

    // Initial fetchAllTasks
    getTasks.mockResolvedValueOnce({
      data: [
        {
          _id: "1",
          title: "Pending Task",
          status: "pending",
          priority: "high"
        }
      ],
      pagination: {
        totalPages: 1
      }
    })

    // Fetch after selecting "completed"
    getTasks.mockResolvedValueOnce({
      data: [
        {
          _id: "2",
          title: "Completed Task",
          status: "completed",
          priority: "high"
        }
      ],
      pagination: {
        totalPages: 1
      }
    })

    // fetchAllTasks after selecting "completed"
    getTasks.mockResolvedValueOnce({
      data: [
        {
          _id: "2",
          title: "Completed Task",
          status: "completed",
          priority: "high"
        }
      ],
      pagination: {
        totalPages: 1
      }
    })

    render(
      <MemoryRouter>
        <TasksPage />
      </MemoryRouter>
    )

    expect(
      await screen.findByText("Pending Task")
    ).toBeInTheDocument()

    const statusFilter = screen.getByRole("combobox", {
      name: /status/i
    })

    await user.selectOptions(
      statusFilter,
      "completed"
    )

    await waitFor(() => {
      expect(
        screen.getByText("Completed Task")
      ).toBeInTheDocument()
    })

    expect(
      screen.queryByText("Pending Task")
    ).not.toBeInTheDocument()
  })

})