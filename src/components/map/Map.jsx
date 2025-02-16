"use client";
import React, { useEffect, useState } from "react";
import Pin from "../Pin";
import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { listData } from "../../libs/data";

const Map = () => {
  return (
    <main className=" w-full h-full  relative">
      <MapContainer
        center={[53.4808, -2.2426]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listData?.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </main>
  );
};

export default Map;
