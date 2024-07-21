import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon: ReactNode;
  className: string;
}

// A reusable button component that supports an icon and customizable styles.
export const Button = ({ text, icon, className }: ButtonProps) => {
  return (
    <button
      type="button"
      // Merge default styles with the provided className for customization
      className={`py-2 flex items-center gap-2 px-4 text-sm font-semibold rounded-lg ${className} hover:bg-white hover:text-black`}
      // Accessible button with visual feedback on hover
    >
      {icon}
      {text}
    </button>
  );
};
