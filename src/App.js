import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SeachBar from './components/SearchBar';

function App( props ) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b160c966`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <div className="App">
      <div className="row">
        <MovieHeader heading="Movies" />
        <SeachBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
