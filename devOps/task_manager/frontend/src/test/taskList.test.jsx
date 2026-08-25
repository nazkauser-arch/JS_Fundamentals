import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, test, expect } from "vitest"
import TaskList from "../components/TaskList"
import TaskCard from "../components/TaskCard"
import userEvent from "@testing-library/user-event"

describe("TaskList", () => {
  test("empty task list shows the correct message", () => {
    render(
      <MemoryRouter>
        <TaskList tasks={[]} onComplete={vi.fn()} />
      </MemoryRouter>
    )

    expect(
      screen.getByText("No tasks has been created yet.")
    ).toBeInTheDocument()
  })
})