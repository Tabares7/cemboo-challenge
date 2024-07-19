import React, { useState } from "react";

export const Title = ({
  title,
  color,
  weight,
  size,
  large,
}: {
  title: string;
  color: string;
  weight: string;
  size: string;
  large?: number;
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowClick = () => {
    setShowFullText((prevState) => !prevState);
  };

  // Function to render the text
  const renderText = (): string => {
    if (showFullText || !large || title.length <= large) {
      return title;
    } else {
      // Show characters until the large number
      return `${title.substring(0, large)} `;
    }
  };

  return (
    <h1 className={`text-left text-${color} text-${size} font-${weight}`}>
      {renderText()}
      {large && title.length > large && (
        <button onClick={handleShowClick} className="text-gray-500">
          {showFullText ? "Show less" : "..."}
        </button>
      )}
    </h1>
  );
};
