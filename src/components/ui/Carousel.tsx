import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieCard } from "./MovieCard";

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
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [deviceType, setDeviceType] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setDeviceType(window.innerWidth < mobileBreakpoint ? 1 : 0);
    };

    // Execute the function to set the initial value
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: deviceType ? 2 : 4, // Adjust number of slides to show based on device
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen-md mx-auto mt-5">
      <Slider {...settings}>
        {movies.map((movie) => (
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
