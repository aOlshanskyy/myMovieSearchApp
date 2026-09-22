import { useState } from 'react'
import { fetchSearch } from './api/omdb'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import './App.css'

function App() {
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

  return (
    <main className="app">
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

export default App
