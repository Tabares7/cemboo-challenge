import React from "react";

export const Rate = ({
  rate,
  color,
  size,
  weight,
}: {
  rate: number;
  color: string;
  size: string;
  weight: string;
}) => {
  const defineMovieRate = () => {
    return rate?.toFixed(1) || "";
  };

  //function to switch badge's color based on rate
  const defineColor = () => {
    if (rate >= 8) return "bg-green-500";
    if (rate >= 6) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <span
      className={`text-sm  md:text-${size} font-${weight} text-${color} ${defineColor()} px-2 rounded-xl bg-opacity-80`}
    >
      {defineMovieRate()}
    </span>
  );
};
