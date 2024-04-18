"use client";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "@/app/_styles/Common.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
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
          className={`flex flex-col items-center justify-center ${styles.fadeOut}`}
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
          <div className="flex justify-center items-center flex-col w-[70vw] m-4 md:w-2/5">
            <MapContainer
              className="!h-[40vh]"
              center={position}
              zoom={16}
              style={{ width: "100%", height: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <button
              className="font-body text-white border-2 border-white mt-2 px-2 rounded-2xl w-1/2 bg-off-white-light bg-opacity-50"
              onClick={() => {
                // Open Google Maps in a new tab
                window.open(
                  "https://maps.app.goo.gl/ZqLoxZUdpSS8BWVJ7",
                  "_blank"
                );
              }}
            >
              Google Maps
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
