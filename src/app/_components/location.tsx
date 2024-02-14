"use client";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Location = () => {
  const position: LatLngExpression = [3.1266427658925164, 101.72525945920253];

  return (
    <div className="w-full h-[100vh] flex items-center bg-rose-800 rounded-3xl border-4 border-slate-200 my-10">
      <div className="w-3/5">
        <h1 className="text-4xl font-bold mb-4 font-sans">
          Wedding Invitation
        </h1>
        <hr />
        <p className="text-lg font-serif">Hao Chen & Chia Qian</p>
        <p className="text-lg font-serif">27-10-2024</p>
      </div>
      <div className="w-2/5 m-8">
        <MapContainer
          className="!h-[40vh]"
          center={position}
          zoom={13}
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
      </div>
    </div>
  );
};

export default Location;
