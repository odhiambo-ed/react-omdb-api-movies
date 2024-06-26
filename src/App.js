import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBar from './components/SearchBar';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';
import AddWatchList from './components/AddWatchList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [type, setType] = useState('');
  const [year, setYear] = useState('');

  const getMovieRequest = async (searchValue, type, year, page = 1) => {
    const apiKey = 'df04dcd1e7d517b58e2844f68f431c25';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}&year=${year}&page=${page}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.results) {
        setMovies(responseJson.results);
        console.log(responseJson.results);
      } else {
        console.log('No results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue, type, year);
  }, [searchValue, type, year]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    const movieWatchlist = JSON.parse(localStorage.getItem('react-movie-app-watchlist'));

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }

    if (movieWatchlist) {
      setWatchlist(movieWatchlist);
    }
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage('react-movie-app-favourites', newFavouriteList);
  };

  const addWatchlistMovie = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage('react-movie-app-watchlist', newWatchlist);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage('react-movie-app-favourites', newFavouriteList);
  };

  const saveToLocalStorage = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
  };

  return (
    <div className="App container">
      <div className="row mb-4">
        <MovieHeader heading="Movies" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* Add filters for type and year */}
        <div className="">
          <select onChange={(e) => setType(e.target.value)} className="form-control">
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
          <input
            type="number"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={addFavouriteMovie}
          handleWatchlistClick={addWatchlistMovie}
          AddWatchlist={AddWatchList}
        />
      </div>
      <div className="row mt-4">
        <MovieHeader heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourite}
        />
      </div>
      <div className="row mt-4">
        <MovieHeader heading="Watchlist" />
      </div>
      <div className="row">
        <MovieList
          movies={watchlist}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={addFavouriteMovie}
          handleWatchlistClick={addWatchlistMovie}
          AddWatchlist={AddWatchList}
        />
      </div>
    </div>
  );
}

export default App;