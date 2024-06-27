import './App.css';
import { useState, useEffect } from 'react';
import { getTopRatedMovies } from './setup/Api';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBar from './components/SearchBar';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';
import AddWatchList from './components/AddWatchList';
import HeroCarousel from './components/HeroCarousel';
import NavBar from './components/NavBar';

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [type, setType] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await getTopRatedMovies();
        setTopRatedMovies(response.results.slice(0, 4));
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
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
    <>
      <NavBar />
      <div className="App container">
        <HeroCarousel movies={topRatedMovies} />
        <div className="row mb-4">
          <MovieHeader heading="Movies" />
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
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
            movies={topRatedMovies}
            favouriteComponent={AddFavourite}
            handleFavouritesClick={addFavouriteMovie}
            handleWatchlistClick={addWatchlistMovie}
            AddWatchlist={AddWatchList}
          />
        </div>
        <div className="row mt-4">
          <MovieHeader heading="Favourites" />
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourite}
          />
        </div>
        <div className="row mt-4">
          <MovieHeader heading="Watchlist" />
          <MovieList
            movies={watchlist}
            favouriteComponent={AddFavourite}
            handleFavouritesClick={addFavouriteMovie}
            handleWatchlistClick={addWatchlistMovie}
            AddWatchlist={AddWatchList}
          />
        </div>
      </div>
    </>
  );
}

export default App;