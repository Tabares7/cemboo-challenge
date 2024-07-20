import React from "react";
import { Title } from "./ui/Title";
import Carousel from "./ui/Carousel";
import movies from "../movies";

export const Recomended: React.FC = () => {
  return (
    <section className="p-5">
      <Title title="Recomended" color="white" size="lg" weight="bold" />
      <Carousel movies={movies} card="big" slides={[2, 7]} />
    </section>
  );
};
