import React from "react";
import { Rate } from "./Rate";
import { RiNetflixFill } from "react-icons/ri";
import { VideoModal } from "./VideoModal";

// Defines a component to display a small movie card with interactive elements.
interface MovieCardTinyProps {
  poster: string;
  rate: number;
  title: string;
}

export const MovieCardTiny: React.FC<MovieCardTinyProps> = ({
  poster,
  rate,
  title,
}) => {
  return (
    <div className="mr-5 overflow-hidden">
      <div className="relative">
        {/* Image of the movie poster */}
        <img
          src={poster}
          alt={`Poster of ${title}`}
          className="w-full rounded-xl"
        />

        {/* Netflix icon overlay */}
        <RiNetflixFill className="text-red-600 absolute top-3 left-3 md:top-5 md:left-5 md:text-2xl" />

        {/* Rating component */}
        <Rate
          rate={rate}
          color="white"
          size="xs"
          weight="light"
          className="absolute bottom-3 right-3 z-10"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute rounded-b-xl bottom-0 z-5"></div>

        {/* Video modal trigger button */}
        <VideoModal
          title={title}
          videoId="d56mG7DezGs"
          classNameBtn="absolute bottom-3 left-3 text-white"
          classNameModal=""
        />
      </div>
    </div>
  );
};
