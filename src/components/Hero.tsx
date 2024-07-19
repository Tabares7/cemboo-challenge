import React from "react";
import movies from "../movies";
import { Rate } from "./ui/Rate";
import { Button } from "./ui/Button";
import { FaPlay, FaPlus } from "react-icons/fa6";

export const Hero = () => {
  const movie = movies[9];

  return (
    <section className="relative m-10 overflow-hidden">
      <img
        src={movie.thumbnail_horizontal}
        alt={movie.title}
        className="w-full rounded-xl overflow-hidden"
      />
      <div className="absolute inset-0 bottom-10 flex flex-col justify-end items-center text-white z-10 p-5">
        <Rate rate={movie.rating} color="white" size="xl" weight="bold" />
        <h1 className="font-bold text-2xl text-white uppercase">
          {movie.title}
        </h1>
        <p className="text-sm mb-3">
          {movie.genre.map((g, index) => (
            <span key={index} className="mr-1">
              {index === 0 ? g : "✤ " + g}
            </span>
          ))}
        </p>
        <div className="flex justify-center gap-10 mx-auto">
          <Button
            icon={<FaPlay />}
            text="Watch Now"
            bg="white"
            opacity="100"
            textColor="black"
          />
          <Button icon={<FaPlus />} text="My List" bg="gray-100" />
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute bottom-0 z-5"></div>
    </section>
  );
};
