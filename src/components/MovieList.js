import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddToWatchlist, onAddToFavorites }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          onAddToWatchlist={onAddToWatchlist} 
          onAddToFavorites={onAddToFavorites} 
        />
      ))}
    </div>
  );
};

export default MovieList;
