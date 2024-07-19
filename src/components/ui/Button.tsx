import React, { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

export const Button = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <button
      type="button"
      className="py-2 flex items-center gap-2 px-4 text-sm font-semibold rounded-lg bg-opacity-10 bg-gray-100 text-white hover:bg-white hover:text-black"
    >
      {icon}
      {text}
    </button>
  );
};
