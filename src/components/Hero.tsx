import React, { useState, useEffect } from "react";
import movies from "../movies";
import { Rate } from "./ui/Rate";
import { Button } from "./ui/Button";
import { FaPlus } from "react-icons/fa";
import { VideoModal } from "./ui/VideoModal";

// Hero component that displays the featured movie.
export const Hero = () => {
  const [deviceType, setDeviceType] = useState<number>(1);

  // Featured movie details.
  const movie = movies[14];

  // Effect to handle responsive layout changes.
  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setDeviceType(window.innerWidth < mobileBreakpoint ? 1 : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative m-10 md:mx-5 overflow-hidden rounded-xl mt-20">
      {/* Dynamic movie thumbnail based on device type */}
      <img
        src={deviceType ? movie.thumbnail_horizontal : movie.thumbnail_vertical}
        alt={movie.title}
        className="w-full"
      />
      <div className="absolute inset-0 bottom-10 flex flex-col justify-end items-center text-white z-10 p-5 md:px-20 md:items-start md:justify-end">
        {/* Dynamic movie rating */}
        <Rate
          rate={movie.rating}
          color="white"
          size="xl"
          weight="bold"
          className="md:mb-3"
        />
        <h1 className="font-bold text-3xl text-white uppercase">
          {movie.title}
        </h1>
        {/* Movie genres */}
        <p className="text-sm text-gray-400 md:mb-0 mb-3">
          {movie.genre.map((g, index) => (
            <span key={index} className="mr-1">
              {index === 0 ? g : "✤ " + g}
            </span>
          ))}
        </p>
        {/* Movie synopsis */}
        {deviceType ? null : <p className="text-sm mb-3">{movie.synopsis}</p>}
        <div className="flex justify-center md:justify-start gap-10 mx-auto md:mx-0">
          <VideoModal
            videoId="d56mG7DezGs"
            classNameBtn="py-2 flex items-center gap-2 px-4 text-sm font-semibold rounded-lg bg-white text-black hover:bg-white hover:text-black"
            text="Watch Now"
            title={movie.title}
          />
          <Button
            icon={<FaPlus />}
            text="My List"
            className="bg-gray-100 bg-opacity-10"
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute bottom-0 z-5"></div>
    </section>
  );
};
