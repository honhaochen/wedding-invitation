"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/app/_styles/Story.module.css";

const Story = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const backgroundBoyImageUrl =
    count === 1 ? "/assets/boy_smile.png" : "/assets/boy.png";
  const backgroundGirlImageUrl =
    count === 1 ? "/assets/girl_smile.png" : "/assets/girl.png";

  return (
    <div className="h-[90vh] flex flex-col items-center bg-rose-950 justify-center rounded-3xl border-4 border-slate-200 my-10">
      <div className="text-2xl mt-4 font-bold font-sans text-white">
        执子之手，与子偕老
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`w-[20vw] h-[30vh] ${styles.left}`}
          style={{
            backgroundImage: `url(${backgroundGirlImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={`w-[20vw] h-[30vh] ${styles.right}`}
          style={{
            backgroundImage: `url(${backgroundBoyImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Story;
