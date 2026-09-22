function MovieCard({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <article className="movie-card">
      {hasPoster ? (
        <img src={movie.Poster} alt={movie.Title} loading="lazy" />
      ) : (
        <div className="movie-card__placeholder" aria-hidden="true">
          Немає постера
        </div>
      )}
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </article>
  )
}

export default MovieCard
