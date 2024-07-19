import React, { useState, useEffect, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieCard } from "./MovieCard";
import { MovieCardTiny } from "./MovieCardTiny";

interface CastMember {
  name: string;
  role: string;
}

interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: CastMember[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
}

interface CarouselProps {
  movies: Movie[];
  condition?: string;
  card: string;
  slides: [number, number];
}

const Carousel: React.FC<CarouselProps> = ({
  movies,
  condition,
  card,
  slides,
}) => {
  const [deviceType, setDeviceType] = useState(1);
  const [moviesToShow, setMoviesToShow] = useState<Movie[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setDeviceType(window.innerWidth < mobileBreakpoint ? 1 : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (condition) {
      const filteredMovies = movies.filter((movie) =>
        movie.genre.includes(condition)
      );
      setMoviesToShow(filteredMovies);
    } else {
      setMoviesToShow(movies);
    }
  }, [movies, condition]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: deviceType ? slides[0] : slides[1], // Adjust number of slides to show based on device
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen-md mx-auto mt-5">
      <Slider {...settings}>
        {card === "tiny"
          ? moviesToShow.map((movie) => (
              <MovieCardTiny
                title={movie.title}
                key={movie.id}
                poster={movie.thumbnail_horizontal}
                rate={movie.rating}
              />
            ))
          : moviesToShow.map((movie) => (
              <MovieCard
                year={movie.release_year}
                key={movie.id}
                title={movie.title}
                poster={movie.thumbnail_horizontal}
                rate={movie.rating}
                description={movie.synopsis}
              />
            ))}
      </Slider>
    </div>
  );
};

export default Carousel;
