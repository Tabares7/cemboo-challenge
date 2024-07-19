import React from "react";
import movies from "../movies";
import { Rate } from "./ui/Rate";
import { Button } from "./ui/Button";

export const Hero = () => {
  const movie = movies[1];

  return (
    <section className="relative">
      <img
        src={movie.thumbnail_vertical}
        alt={movie.title}
        className="w-full"
      />
      <div className="absolute left-0 bottom-0 text-left text-white z-10 p-5 flex flex-col justify-start items-start">
        <Rate rate={movie.rating} color="white" size="xl" weight="bold" />
        <h1 className=" font-bold text-3xl text-white">{movie.title}</h1>
        <p className="text-sm mb-3">{movie.synopsis}</p>
        <Button text="Watch Now" />
      </div>
      <div className="bg-gradient-to-t from-[#01001e] to-transparent h-2/3 w-full absolute bottom-0 z-5"></div>
    </section>
  );
};
