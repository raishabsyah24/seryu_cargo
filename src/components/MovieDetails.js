import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(response => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <button>Add to Watchlist</button>
      <button>Add to Favorites</button>
    </div>
  );
};

export default MovieDetails;
