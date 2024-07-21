import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

// Component to display a section of Sci-Fi movies with a carousel.
export const SciFi = () => {
  return (
    <section className="p-5">
      {/* Title for the Sci-Fi movies section */}
      <Title title="Sci-Fi Movies" color="white" size="lg" weight="bold" />

      {/* Carousel configured to show Sci-Fi movies in a smaller card format */}
      <Carousel
        movies={movies.filter((movie) => movie.genre.includes("Sci-Fi"))} // Ensures that only Sci-Fi genre movies are passed to the Carousel
        condition="Sci-Fi"
        card="tiny"
        slides={[3, 5]} // Defines the number of slides to show based on the device type
      />
    </section>
  );
};
