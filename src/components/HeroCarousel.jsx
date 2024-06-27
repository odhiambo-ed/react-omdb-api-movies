import React from "react";
import Slider from "react-slick";
import { gsap } from "gsap";

const HeroCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    beforeChange: (current, next) => {
      // Additional GSAP animations can be added here if needed
      const nextSlide = document.querySelector(`[data-index="${next}"]`);
      gsap.fromTo(nextSlide, { opacity: 0 }, { opacity: 1, duration: 1 });
    },
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
            <div className="hero-carousel-overlay">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;