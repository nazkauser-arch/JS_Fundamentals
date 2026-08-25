import { test, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"

import LoginPage from "../pages/loginPage"

const { mockLogin } = vi.hoisted(() => ({
  mockLogin: vi.fn()
}))

vi.mock("../hooks/useAuth", () => ({
  default: () => ({
    login: mockLogin,
    isAuthenticated: false,
    loading: false
  })
}))

beforeEach(() => {
  mockLogin.mockReset()
})

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

test("incorrect login shows an API error", async () => {
  const user = userEvent.setup()

  mockLogin.mockRejectedValue(
    new Error("Invalid credentials")
  )

  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  )

  await user.type(
    screen.getByPlaceholderText("Enter Email"),
    "wrong@example.com"
  )

  await user.type(
    screen.getByPlaceholderText("Enter Password"),
    "wrongpassword"
  )

  await user.click(
    screen.getByRole("button", { name: "Login" })
  )

  expect(
    await screen.findByText("Invalid credentials")
  ).toBeInTheDocument()
})