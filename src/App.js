import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';
import WatchlistPage from './pages/WatchlistPage';
import FavoritePage from './pages/FavoritePage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
};

export default App;
