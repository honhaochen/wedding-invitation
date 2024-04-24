"use client";

import { LatLngExpression } from "leaflet";
import styles from "@/app/_styles/Common.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "./container";

const Location = () => {
  const position: LatLngExpression = [3.1266427658925164, 101.72525945920253];
  const activeIndex = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (activeIndex === 4) {
      setShow(true);
    }
  }, [activeIndex]);

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center rounded-3xl border-4 border-white my-10 md:flex-row md:p-12">
      {show && (
        <div
          className={`flex flex-col items-center justify-center ${styles.fadeOut} md:flex-row md:p-12`}
        >
          <div className="w-[80vw] p-8 md:w-3/5 flex items-center justify-center flex-col md:items-start">
            <div className="text-4xl font-bold mt-4 font-chinese text-off-white-dark">
              婚礼地点
            </div>
            <div className="text-4xl font-bold mt-1 font-display text-off-white-dark">
              Venue
            </div>
            <div className="text-lg font-chinese mt-2 text-off-white-dark">
              喜粤饮食集团
            </div>
            <div className="text-lg font-display mt-1 text-off-white-dark text-center md:text-left">
              Sunway Velocity Grand Imperial Group
            </div>
          </div>
          <div
            className="w-[70vw] h-[40vh] md:w-2/5"
            style={{
              backgroundImage: `url('/assets/map.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => {
              // Open Google Maps in a new tab
              window.open(
                "https://maps.app.goo.gl/ZqLoxZUdpSS8BWVJ7",
                "_blank"
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Location;
