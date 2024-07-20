import React from "react";
import ModalVideo from "react-modal-video";
import { Rate } from "./Rate";
import { VideoModal } from "./VideoModal";

import { RiNetflixFill } from "react-icons/ri";

export const MovieCard = ({ title, poster, rate, description, year }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="mr-5">
      <div className="relative">
        <img src={poster} alt={title} className="w-full rounded-xl mb-4" />
        <RiNetflixFill className="text-red-600 absolute top-3 left-3" />

        <Rate
          rate={rate}
          color="white"
          size="xs"
          weight="light"
          className="absolute bottom-3 right-3 z-10"
        />
        <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute rounded-b-xl bottom-0 z-5"></div>

        <VideoModal
          videoId="fUgxxhI_bvc"
          classNameBtn="absolute  bottom-3 left-5  text-xl text-white"
          classNameModal=""
        />
      </div>
      <h1 className=" text-xs text-white">{title}</h1>
      <h2 className="text-gray-500 text-xs">{year}</h2>
      {/* <p className="text-xs mb-3">{description}</p> */}
    </div>
  );
};
