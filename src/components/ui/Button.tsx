import React, { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

export const Button = ({
  text,
  icon,
  bg,
  opacity = "20",
  textColor = "white",
}: {
  text: string;
  icon: ReactNode;
  bg: string;
  opacity?: string;
  textColor?: string;
}) => {
  return (
    <button
      type="button"
      className={`py-2 flex items-center gap-2 px-4 text-sm font-semibold rounded-lg bg-opacity-${opacity} bg-${bg} text-${textColor} hover:bg-white hover:text-black `}
    >
      {icon}
      {text}
    </button>
  );
};
