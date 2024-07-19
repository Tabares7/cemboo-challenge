import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

export const SciFi = () => {
  return (
    <section className="p-5">
      <Title title="Drama Movies" color="white" size="lg" weight="bold" />
      <Carousel
        movies={movies}
        condition="Sci-Fi"
        card="tiny"
        slides={[3, 6]}
      />
    </section>
  );
};
