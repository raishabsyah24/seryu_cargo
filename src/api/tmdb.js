import axios from 'axios';

const API_KEY = 'a2497c8f7339b9e21bdcdcc1cad59b61';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export const getNowPlayingMovies = () => tmdb.get('/movie/now_playing');
export const getTopRatedMovies = () => tmdb.get('/movie/top_rated');
export const getMovieDetails = (id) => tmdb.get(`/movie/${id}`);
export const searchMovies = (query) => tmdb.get(`/search/movie`, { params: { query } });
