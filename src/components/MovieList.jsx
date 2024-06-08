import React from 'react'

function MovieList( props ) {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {props.movies.map((movie, index) => {
          return (
            <li key={index}>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList