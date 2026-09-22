import { useState } from 'react'

function SearchBar({ onSearch, disabled }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    onSearch(trimmed)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Назва фільму..."
        disabled={disabled}
        aria-label="Пошук фільму"
      />
      <button type="submit" disabled={disabled}>
        Шукати
      </button>
    </form>
  )
}

export default SearchBar
