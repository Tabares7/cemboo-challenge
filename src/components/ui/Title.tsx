import React, { useState } from "react";

interface TitleProps {
  title: string;
  color: string; // Consider using a specific set of color classes to ensure compatibility with Tailwind.
  weight: "light" | "normal" | "medium" | "semibold" | "bold"; // Define specific allowed values.
  size: "sm" | "md" | "lg" | "xl"; // Define specific allowed sizes.
  large?: number; // Number of characters at which the text will be truncated.
}

export const Title: React.FC<TitleProps> = ({
  title,
  color,
  weight,
  size,
  large,
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowClick = () => {
    setShowFullText(!showFullText);
  };

  // Function to render the text
  const renderText = (): string => {
    if (showFullText || !large || title.length <= large) {
      return title;
    }
    // Show characters until the 'large' number
    return `${title.substring(0, large)}...`;
  };

  return (
    <h1 className={` text-${color} font-${weight} text-left text-3xl`}>
      {renderText()}
      {large && title.length > large && (
        <button onClick={handleShowClick} className="text-gray-500">
          {showFullText ? "Show less" : "Show more"}
        </button>
      )}
    </h1>
  );
};
