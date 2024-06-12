import React from 'react'
import AddFavourite from './AddFavourite';

function MovieList( props ) {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {props.movies.map((movie, index) => {
          return (
            <li key={index}>
              <h6>{movie.Title}</h6>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <div
                onClick={() => props.handleFavouritesClick(movie)}
              >
                <AddFavourite />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList