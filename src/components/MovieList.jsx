import React from "react";
import AddWatchList from "./AddWatchList";

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h6>{movie.Title}</h6>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="d-flex flex-row justify-content-between">
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="favourite-icon"
            >
              <FavouriteComponent />
            </div>
            {props.handleWatchlistClick && (
              <div
                onClick={() => props.handleWatchlistClick(movie)}
                className="watchlist-icon"
              >
                <AddWatchList />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;