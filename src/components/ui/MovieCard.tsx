import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Rate } from "./Rate";
import { VideoModal } from "./VideoModal";
import { RiNetflixFill } from "react-icons/ri";

interface MovieCardProps {
  title: string;
  poster: string;
  rate: number;
  description?: string;
  year: number;
}

// Component to display movie information in a card format with interactive elements.
export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster,
  rate,
  year,
  description,
}) => {
  const [isOpen, setOpen] = useState(false); // State to manage modal visibility.

  return (
    <div className="mr-5">
      <div className="relative">
        {/* Movie poster */}
        <img src={poster} alt={title} className="w-full rounded-xl mb-4" />

        {/* Netflix icon */}
        <RiNetflixFill className="text-red-600 absolute top-3 left-3 md:top-5 md:left-5 md:text-2xl" />

        {/* Dynamic rating component */}
        <Rate
          rate={rate}
          color="white"
          size="sm"
          weight="light"
          className="absolute bottom-3 right-3 md:bottom-5 md:right-5 z-10"
        />

        {/* Gradient overlay for text visibility */}
        <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute rounded-b-xl bottom-0 z-5"></div>

        {/* Modal video button */}
        <VideoModal
          title={title}
          videoId="d56mG7DezGs"
          classNameBtn="absolute bottom-3 left-5 text-xl text-white md:bottom-5 md:left-5"
          classNameModal=""
        />
      </div>

      {/* Movie title and year */}
      <h1 className="text-xs text-white md:text-xl md:font-bold">{title}</h1>
      <h2 className="text-gray-500 text-xs">{year}</h2>

      {/* Optional movie description */}
      {/* Toggle this comment as needed */}
      {/* <p className="text-xs mb-3">{description}</p> */}
    </div>
  );
};
