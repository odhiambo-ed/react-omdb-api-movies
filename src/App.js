import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SeachBar from './components/SearchBar';

function App( props ) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <div className="row">
        <MovieHeader heading="Movies" />
        <SeachBar searchValue={searchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
