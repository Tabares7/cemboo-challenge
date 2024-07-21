import React, { useState, useEffect } from "react";
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
  card: "tiny" | "regular"; // Change type to union type for stricter control
  slides: [number, number]; // Tuple type is correct here
  display?: "vertical" | "horizontal"; // Use union type for options
}

const Carousel: React.FC<CarouselProps> = ({
  movies,
  condition,
  card,
  slides,
  display = "vertical",
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
    const filteredMovies = condition
      ? movies.filter((movie) => movie.genre.includes(condition))
      : movies;
    setMoviesToShow(filteredMovies);
  }, [movies, condition]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: deviceType ? slides[0] : slides[1],
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen mt-5">
      <Slider {...settings}>
        {moviesToShow.map((movie) =>
          card === "tiny" ? (
            <MovieCardTiny
              key={movie.id}
              title={movie.title}
              poster={
                display === "vertical"
                  ? movie.thumbnail_horizontal
                  : movie.thumbnail_vertical
              }
              rate={movie.rating}
            />
          ) : (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.release_year}
              poster={
                display === "vertical"
                  ? movie.thumbnail_horizontal
                  : movie.thumbnail_vertical
              }
              rate={movie.rating}
              description={movie.synopsis}
            />
          )
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
