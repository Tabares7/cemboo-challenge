import React from "react";
import { Rate } from "./Rate";

export const MovieCard = ({ title, poster, rate, description, year }) => {
  return (
    <div className="mr-5">
      <div className="relative">
        <img src={poster} alt={title} className="w-full rounded-xl mb-4" />
        <Rate
          rate={rate}
          color="white"
          size="xs"
          weight="light"
          className="absolute bottom-3 right-3 "
        />
      </div>
      <h1 className=" text-xs text-white">{title}</h1>
      <h2 className="text-gray-500 text-xs">{year}</h2>
      {/* <p className="text-xs mb-3">{description}</p> */}
    </div>
  );
};
