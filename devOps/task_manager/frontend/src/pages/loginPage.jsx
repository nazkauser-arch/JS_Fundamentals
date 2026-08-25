import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AppHeader from "../components/appHeader"
import useAuth from "../hooks/useAuth"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const { login, isAuthenticated, loading } = useAuth()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/tasks", { replace: true })
    }
  }, [loading, isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
        return
      }

    if (!password) {
      setError("Password is required")
        return
      }

    try {
      await login(email, password)

      navigate("/tasks")
    } catch (error) {
      console.error(error)
      setError(error.message || "Login failed")
    }
  }

  if (loading) {
    return (
      <>
        <AppHeader />

        <main className="auth-page">
          <p>Checking session...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <AppHeader />

      <main className="auth-page">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Task Manager</h1>

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p>{error}</p>}

          <p>
            <button type="submit">
              Login
            </button>
          </p>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </form>
      </main>
    </>
  )
}

export default LoginPage