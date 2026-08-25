import { test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"

vi.mock("../hooks/useAuth", () => ({
  default: () => ({
    login: vi.fn(),
    isAuthenticated: false,
    loading: false
  })
}))

test("login form displays email and password fields", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  )

  expect(
    screen.getByPlaceholderText("Enter Email")
  ).toBeInTheDocument()

  expect(
    screen.getByPlaceholderText("Enter Password")
  ).toBeInTheDocument()
})

test("empty login form shows validation errors", async () => {
  const user = userEvent.setup()

  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  )

  await user.click(
    screen.getByRole("button", { name: "Login" })
  )

  expect(
    screen.getByText("Email is required")
  ).toBeInTheDocument()
})