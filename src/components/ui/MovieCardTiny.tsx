import React from "react";
import { Rate } from "./Rate";

export const MovieCardTiny = ({ poster, rate, title }) => {
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
    </div>
  );
};
