import React from "react";

export const Button = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      className="py-2 px-4  text-sm font-semibold rounded-lg  bg-opacity-10  bg-gray-100 text-white hover:bg-white hover:text-black "
    >
      {text}
    </button>
  );
};
