import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchSearch } from '../api/omdb'
import { getSession, logout } from '../auth/auth'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'

function HomePage() {
  const navigate = useNavigate()
  const session = getSession()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  async function handleSearch(query) {
    setLoading(true)
    setError('')
    setSearched(true)

    try {
      const results = await fetchSearch(query)
      setMovies(results)
    } catch (err) {
      setMovies([])
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <main className="app">
      <header className="app-header">
        <p>Привіт, {session?.username}</p>
        <button type="button" onClick={handleLogout}>
          Вийти
        </button>
      </header>

      <h1>Пошук фільмів</h1>
      <SearchBar onSearch={handleSearch} disabled={loading} />

      {loading && <p className="status">Завантаження...</p>}
      {error && <p className="status status--error">{error}</p>}
      {!loading && !error && searched && movies.length === 0 && (
        <p className="status">Нічого не знайдено</p>
      )}
      {!loading && movies.length > 0 && <MovieList movies={movies} />}
    </main>
  )
}

export default HomePage