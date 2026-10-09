import users from '../data/users.json'

const AUTH_KEY = 'movieAppAuth'

export function getSession() {
  const raw = localStorage.getItem(AUTH_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function isAuthenticated() {
  return getSession() !== null
}

export function login(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    return { ok: false, error: 'Невірний логін або пароль' }
  }

  localStorage.setItem(AUTH_KEY, JSON.stringify({ username: user.username }))
  return { ok: true }
}

export function logout() {
  localStorage.removeItem(AUTH_KEY)
}