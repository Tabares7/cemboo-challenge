import React from "react";
import { Rate } from "./Rate";
import { RiNetflixFill } from "react-icons/ri";
import { VideoModal } from "./VideoModal";

export const MovieCardTiny = ({ poster, rate, title }) => {
  return (
    <div className="mr-5 overflow-hidden">
      <div className="relative ">
        <img src={poster} alt={title} className="w-full rounded-xl " />
        <RiNetflixFill className="text-red-600 absolute top-3 left-3 md:top-5 md:left-5 md:text-2xl" />
        <Rate
          rate={rate}
          color="white"
          size="xs"
          weight="light"
          className="absolute bottom-3 right-3 z-10 "
        />
        <div className="bg-gradient-to-t from-[#111112] to-transparent h-2/3 w-full absolute rounded-b-xl bottom-0 z-5"></div>

        <VideoModal
          videoId="fUgxxhI_bvc"
          classNameBtn="absolute  bottom-3 left-3  text-white"
          classNameModal=""
        />
      </div>
    </div>
  );
};
