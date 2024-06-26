import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouritesClick,
  handleWatchlistClick,
  AddWatchlist,
}) => {
  const movieItemsRef = useRef([]);

  useEffect(() => {
    // Animate movie items on mount
    gsap.from(movieItemsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
    });
  }, [movies]);

  const FavouriteComponent = favouriteComponent;

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div
          className="movie-item"
          key={movie.id}
          ref={(el) => (movieItemsRef.current[index] = el)}
        >
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