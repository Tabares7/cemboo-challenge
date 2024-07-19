import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

export const Drama: React.FC = () => {
  return (
    <section className="p-5">
      <Title title="Drama Movies" color="white" size="lg" weight="bold" />
      <Carousel
        movies={movies}
        condition="Drama"
        card="tiny"
        slides={[2, 6]}
        display="horizontal"
      />
    </section>
  );
};
