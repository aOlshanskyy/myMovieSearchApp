import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated, login } from '../auth/auth'

function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Якщо вже залогінений — одразу на головну
  if (isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const result = login(username.trim(), password)

    if (!result.ok) {
      setError(result.error)
      return
    }

    navigate('/')
  }

  return (
    <main className="login-page">
      <h1>Вхід</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Логін
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="status status--error">{error}</p>}

        <button type="submit">Увійти</button>
      </form>

      <p className="login-hint">
        Demo: <code>demo / demo</code> або <code>admin / 123456</code>
      </p>
    </main>
  )
}

export default LoginPage