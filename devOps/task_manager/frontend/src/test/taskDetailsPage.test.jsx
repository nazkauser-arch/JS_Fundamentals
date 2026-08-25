import {
  render,
  screen
} from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import {
  MemoryRouter,
  Routes,
  Route
} from "react-router-dom"

import {
  describe,
  test,
  expect,
  vi
} from "vitest"

import TaskDetailsPage from "../pages/taskDetailsPage"

import {
  getTask,
  deleteTask
} from "../api/taskApi"

vi.mock("../api/taskApi", () => ({
  getTask: vi.fn(),
  deleteTask: vi.fn()
}))

vi.mock("../components/appHeader", () => ({
  default: () => <header>Task Manager</header>
}))

test("clicking Delete asks for confirmation", async () => {
  const user = userEvent.setup()

  localStorage.setItem("token", "test-token")

  getTask.mockResolvedValue({
    data: {
      _id: "1",
      title: "Test Task",
      description: "Test description",
      status: "pending",
      priority: "high",
      dueDate: "2026-09-01"
    }
  })

  const confirmMock = vi
    .spyOn(window, "confirm")
    .mockReturnValue(false)

  render(
    <MemoryRouter initialEntries={["/tasks/1"]}>
      <Routes>
        <Route
          path="/tasks/:id"
          element={<TaskDetailsPage />}
        />
      </Routes>
    </MemoryRouter>
  )

  expect(
    await screen.findByText("Test Task")
  ).toBeInTheDocument()

  const deleteButton = screen.getByRole("button", {
    name: "Delete"
  })

  await user.click(deleteButton)

  expect(confirmMock).toHaveBeenCalledWith(
    "Are you sure you want to delete this task?"
  )

  expect(deleteTask).not.toHaveBeenCalled()

  confirmMock.mockRestore()
})