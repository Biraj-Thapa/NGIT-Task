import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";
import CardData from "../value/CardData";

export const InfiniteScrollCardList = ({ cardData: propCardData }) => {
  const initialData = propCardData || [];
  const containerRef = useRef(null);
  const [data, setData] = useState(initialData);
  const [scrollPosition, setScrollPosition] = useState(0);

  const loadMoreData = useCallback(() => {
    setTimeout(() => {
      const moreData = [...data, ...CardData];
      setData(moreData);
    }, 1000);
  }, [data]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const scrollHeight = containerRef.current.scrollHeight;
    const clientHeight = containerRef.current.clientHeight;

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setScrollPosition(scrollPercentage);
    if (scrollTop + clientHeight === scrollHeight) {
      loadMoreData();
    }
  }, [loadMoreData]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (!containerRef.current) return;
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!propCardData) {
      loadMoreData();
    }
  }, [propCardData, loadMoreData]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center h-screen overflow-auto"
      style={{ scrollBehavior: "smooth", position: "relative" }}
    >
      {data.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          avatarImageUrl={card.avatarImageUrl}
          titleText={card.titleText}
          subTitleText={card.subTitleText}
          isActive={false}
        />
      ))}
    </div>
  );
};

export default InfiniteScrollCardList;
