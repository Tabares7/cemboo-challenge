import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

// Component to display a section of drama movies with a carousel.
export const Drama: React.FC = () => {
  return (
    <section className="p-5">
      {/* Title for the drama movie section */}
      <Title title="Drama Movies" color="white" size="lg" weight="bold" />

      {/* Carousel configured to show drama movies in a smaller card format */}
      <Carousel
        movies={movies.filter((movie) => movie.genre.includes("Drama"))} // Ensure filtering happens ideally in the Carousel or here for more explicit control
        condition="Drama"
        card="tiny"
        slides={[2, 3]} // Defines the number of slides to show based on the device type
        display="horizontal" // Indicates the orientation of the movie thumbnails
      />
    </section>
  );
};
