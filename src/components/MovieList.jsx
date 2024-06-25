import React from "react";

const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouritesClick,
  handleWatchlistClick,
  AddWatchlist,
}) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div className="movie-item" key={movie.id}>
          <h6>{movie.title}</h6>
          <p>{movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie"
          />
          <div
            onClick={() => handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
          <div
            onClick={() => handleWatchlistClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <AddWatchlist />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;