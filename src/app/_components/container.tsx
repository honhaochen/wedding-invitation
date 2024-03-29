"use client";

import { useRef, useState, useEffect, createContext } from "react";

type Props = {
  children?: React.ReactNode;
};

export const PageContext = createContext<number>(0);

const Container = ({ children }: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // State for active card index

  async function handleScroll() {
    // busy wait for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 200));

    const containerHeight = window.scrollY;
    const singleChildHeight = window.innerHeight;

    const index = Math.round(containerHeight / singleChildHeight);

    // Ensure index is within valid range
    setActiveIndex(index);
  }

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchend", handleScroll);
      return () => {
        container.removeEventListener("wheel", handleScroll);
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchend", handleScroll);
      };
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
      <PageContext.Provider value={activeIndex}>
        {children}
      </PageContext.Provider>
    </div>
  );
};

export default Container;
