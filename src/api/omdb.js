const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = 'https://www.omdbapi.com/'

export async function fetchSearch(query) {
  if (!API_KEY) {
    throw new Error('Missing VITE_OMDB_API_KEY in .env')
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  const data = await res.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'Search failed')
  }

  return data.Search
}
