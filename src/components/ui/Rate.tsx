import React from "react";

interface RateProps {
  rate: number;
  color: string; // This should be a valid Tailwind CSS color, not just any string.
  size: "sm" | "md" | "lg" | "xl"; // Restricting to known sizes for better type safety.
  weight: "light" | "normal" | "medium" | "semibold" | "bold"; // Similarly, restricting to known font weights.
  className?: string;
}

// Component to display a movie rating with dynamic styling based on the rating value.
export const Rate: React.FC<RateProps> = ({
  rate,
  color,
  size,
  weight,
  className,
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
      className={`text-sm  md:text-${size} font-${weight} text-${color} ${defineColor()} px-2 rounded-xl  ${className}`}
    >
      {defineMovieRate()}
    </span>
  );
};
