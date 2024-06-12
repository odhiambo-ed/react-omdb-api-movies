import React from "react";
import AddFavourite from "./AddFavourite";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h6>{movie.Title}</h6>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="favourite-icon"
          >
            <AddFavourite />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;