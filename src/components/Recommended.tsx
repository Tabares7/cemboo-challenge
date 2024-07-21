import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

// Component for displaying a recommended movies section using a carousel.
export const Recommended: React.FC = () => {
  return (
    <section className="p-5">
      <Title title="Recommended" color="white" size="lg" weight="bold" />

      {/* Carousel component to display movies in a slider format */}
      <Carousel movies={movies} card="regular" slides={[2, 4]} />
    </section>
  );
};
