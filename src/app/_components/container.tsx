"use client";

import { useRef, useState, useEffect, createContext } from "react";

type Props = {
  children?: React.ReactNode;
};

export const PageContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
});

const Container = ({ children }: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // State for active card index

  async function handleScroll() {
    const containerHeight = window.scrollY;
    const singleChildHeight = (window.innerHeight * 4) / 5;

    const index = Math.round(containerHeight / singleChildHeight);

    // Ensure index is within valid range
    setActiveIndex(index);
  }

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchstart", handleScroll);
      container.addEventListener("touchend", handleScroll);
      return () => {
        container.removeEventListener("wheel", handleScroll);
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchstart", handleScroll);
        container.removeEventListener("touchend", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto px-5 md:px-40 max-w-[800px]"
    >
      <PageContext.Provider value={{ activeIndex, setActiveIndex }}>
        {children}
      </PageContext.Provider>
    </div>
  );
};

export default Container;
