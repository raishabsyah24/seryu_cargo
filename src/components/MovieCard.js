import React from 'react';

const MovieCard = ({ movie, onAddToWatchlist, onAddToFavorites }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3>{movie.title}</h3>
        <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>
        <button onClick={() => onAddToFavorites(movie)}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default MovieCard;
