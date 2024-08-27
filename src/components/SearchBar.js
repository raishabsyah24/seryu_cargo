import React, { useState } from 'react';
import { searchMovies } from '../api/tmdb';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    onSearchResults(results.data.results);
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search movies..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
