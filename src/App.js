import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SeachBar from './components/SearchBar';

function App( props ) {
  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Empire at War",
      "Year": "2006",
      "imdbID": "tt0804909",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGRiMDllMDUtOWFkZS00MGIyLWFkOTQtZjY2ZGUyNzY5YWRiXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars Empire at War: Forces of Corruption",
      "Year": "2006",
      "imdbID": "tt0879261",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGIxYTZiMmQtYjYzMS00ZmExLTljZDktMjE1ODY5OTJlYjlmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: Enterprise - In a Time of War",
      "Year": "2014",
      "imdbID": "tt3445408",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NDA4MzUwM15BMl5BanBnXkFtZTgwMTg3NjY5MDE@._V1_SX300.jpg"
    },
    {
      "Title": "Star War the Third Gathers: The Backstroke of the West",
      "Year": "2010",
      "imdbID": "tt18183916",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Star Trek: Starfleet Command: Volume II: Empires at War",
      "Year": "2000",
      "imdbID": "tt0272306",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiYjQxZDQtOWM5NS00ZDZhLWJkYTUtNjQ3ZjdiMzM1MDYyXkEyXkFqcGdeQXVyMzMxNDQ0NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: The Next Generation - Survive and Suceed: An Empire at War",
      "Year": "2013",
      "imdbID": "tt3060318",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM5ODY0MDQ2NF5BMl5BanBnXkFtZTgwMjQ5NDgwMDE@._V1_SX300.jpg"
    },
    {
      "Title": "Shuten Doji: The Star Hand Kid Volume 3 - Time War",
      "Year": "1989",
      "imdbID": "tt0410598",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "America's Five Star Heroes: Gods of War",
      "Year": "1998",
      "imdbID": "tt0371529",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Star Fleet I: The War Begins",
      "Year": "1985",
      "imdbID": "tt0793579",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2M0MGRiM2ItOWY1NC00MTUxLTkwNWYtY2VjZmZkNmZjNWYxXkEyXkFqcGdeQXVyMzYyMzU2OA@@._V1_SX300.jpg"
    },
    {
      "Title": "Lone Star Holy War",
      "Year": "2014",
      "imdbID": "tt4254746",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzI1MDczMjc4N15BMl5BanBnXkFtZTgwNjk1NjU3NTE@._V1_SX300.jpg"
    }
  ]);
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
