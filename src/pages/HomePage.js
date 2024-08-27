import React, { useState, useEffect } from 'react';
import { getNowPlayingMovies, getTopRatedMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then(response => setNowPlaying(response.data.results));
    getTopRatedMovies().then(response => setTopRated(response.data.results));
  }, []);

  return (
    <div>
      <h2>Now Playing</h2>
      <MovieList movies={nowPlaying} />
      <h2>Top Rated</h2>
      <MovieList movies={topRated} />
    </div>
  );
};

export default HomePage;
