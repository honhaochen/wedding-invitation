"use client";

import styles from "@/app/_styles/Common.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "./container";

const Location = () => {
  const page = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (page.activeIndex === 4) {
      setShow(true);
    }
  }, [page.activeIndex]);

  useEffect(() => {
    // setShow(true) after 8 seconds
    setTimeout(() => {
      setShow(true);
    }, 8000);
  }, []);

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center rounded-3xl border-4 border-white my-10">
      {show && (
        <div
          className={`flex flex-col items-center justify-center ${styles.fadeOut}`}
        >
          <div className="w-[80vw] p-8 flex items-center justify-center flex-col">
            <div className="text-4xl font-bold mt-4 font-chinese text-off-white-dark">
              婚禮地點
            </div>
            <div className="text-4xl font-bold mt-1 font-display text-off-white-dark">
              Venue
            </div>
            <div className="text-lg font-chinese mt-2 text-off-white-dark">
              喜粵飲食集團
            </div>
            <div className="text-lg font-display mt-1 text-off-white-dark text-center">
              Sunway Velocity Grand Imperial Group
            </div>
          </div>
          <div
            className="w-[70vw] h-[40vh]"
            style={{
              backgroundImage: `url('/assets/map.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
            onClick={() => {
              // Open Google Maps in a new tab
              window.open(
                "https://maps.app.goo.gl/ZqLoxZUdpSS8BWVJ7",
                "_blank"
              );
            }}
          />
          <div className="text-sm font-display mt-4 text-off-white-dark">
            Press to Open Google Maps
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
