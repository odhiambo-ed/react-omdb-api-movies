// components/HeroCarousel.jsx
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css";

const HeroCarousel = ({ movies }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      gsap.fromTo(
        slide,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        &#10095;
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        &#10094;
      </div>
    );
  };

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      const nextSlide = document.querySelector(`[data-index="${next}"]`);
      gsap.fromTo(nextSlide, { opacity: 0 }, { opacity: 1, duration: 1 });
    },
  };

  return (
    <div className="hero-carousel">
      <Slider ref={sliderRef} {...settings}>
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