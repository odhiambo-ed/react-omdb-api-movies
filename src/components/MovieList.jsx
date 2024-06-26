import React from "react";
import Slider from "react-slick";

const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouritesClick,
  handleWatchlistClick,
  AddWatchlist,
}) => {
  const FavouriteComponent = favouriteComponent;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default MovieList;