import React, { useState } from "react";
import { Circular, Rectangular, SubTitle, Title } from "../shapes";

const Card = ({
  isActive,
  cardContainerStyles,
  rectangleContainerStyles,
  circleContainerStyles,
  titleText,
  subTitleText,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleMouseMove = () => {
    if (isDragging) {
      setIsResizing(true);
    }
  };

  const activeClass = isActive ? "scale-110" : "";
  const cardDynamicStyles =
    cardContainerStyles ||
    "w-80 min-h-80 rounded-2xl shadow-4xl p-4 my-4 bg-gradient-to-br from-rose-500 to-rose-400";
  const rectangleStyles =
    rectangleContainerStyles ||
    "bg-gradient-to-br from-rose-400 to-[#db7483] w-[100%] h-36 rounded-2xl shadow-2xl";
  const circleStyles =
    circleContainerStyles ||
    "w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-300 shadow-md";

  const dynamicCircleStyles = isResizing
    ? "w-32 h-20 rounded-full bg-gradient-to-br from-rose-400 to-rose-300 shadow-md oval-shape transition-all duration-300 ease-in-out"
    : circleStyles;

  return (
    <div
      className={`transition-transform duration-300 ease-in-out ${activeClass} ${cardDynamicStyles}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Rectangular rectangleStyles={rectangleStyles} />
      <div className="flex items-center mt-5">
        <Circular circleStyles={dynamicCircleStyles} />
        <div className="flex-grow ml-4">
          <Title titleText={titleText} />
          <SubTitle subTitleText={subTitleText} />
        </div>
      </div>
    </div>
  );
};

export default Card;
