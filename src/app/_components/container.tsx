"use client";

import { useRef, useState, useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // State for active card index

  const handleScroll = () => {
    const containerHeight = window.scrollY;
    const singleChildHeight = window.innerHeight;

    const index = Math.round(containerHeight / singleChildHeight);

    // Ensure index is within valid range
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      return () => container.removeEventListener("wheel", handleScroll);
    }
  }, []);

  useEffect(() => {
    const singleChildHeight = window.innerHeight;

    // Smooth scroll to center the card, considering container height:
    window.scrollTo({
      top: singleChildHeight * activeIndex - 50 * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="container mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
