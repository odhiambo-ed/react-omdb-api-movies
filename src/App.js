import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SeachBar from './components/SearchBar';
import AddFavourite from './components/AddFavourite';

function App( props ) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

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

  const AddFavouriteMovie = (movie) => { 
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  return (
    <div className="App">
      <div className="row">
        <MovieHeader heading="Movies" />
        <SeachBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row d-flex flex-row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={AddFavouriteMovie}
        />
      </div>
      <div className="row">
        <MovieHeader heading="Favourites" />
      </div>
      <div className="row d-flex flex-row">
        <MovieList
          movies={favourites}
        />
        </div>
    </div>
  );
}

export default App;
