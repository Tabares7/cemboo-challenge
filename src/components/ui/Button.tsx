import React, { ReactNode } from "react";

export const Button = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon: ReactNode;
  className: string;
}) => {
  return (
    <button
      type="button"
      className={`py-2 flex items-center gap-2 px-4 text-sm font-semibold rounded-lg ${className} hover:bg-white hover:text-black `}
    >
      {icon}
      {text}
    </button>
  );
};
