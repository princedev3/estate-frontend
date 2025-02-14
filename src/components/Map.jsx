"use client";
import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (L.DomUtil.get("map") !== null) {
        return;
      }

      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <main className="d w-[100%] h-[10vh] z-1">
      <div>
        <MapContainer center={[40.609787846393196, 20.7890265133657]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CircleMarker
            className="n w-[150px] h-[150px]"
            center={[40.609787846393196, 20.7890265133657]}
            radius={10}
            color="transparent"
            fillColor="green"
            fillOpacity={0.5}
          >
            <Popup className="w-[460px] h-[150px]">
              <p className="text-[25px]">My Location </p>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </main>
  );
};

export default Map;

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   CircleMarker,
//   Popup,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// // import { useEffect } from "react";
// // import L from "leaflet";

// function Map() {
//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     // Check if map already exists before initializing
//   //     if (L.DomUtil.get("map") !== null) {
//   //       return;
//   //     }

//   //     const map = L.map("map").setView([51.505, -0.09], 13);
//   //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
//   //       map
//   //     );

//   //     return () => {
//   //       map.remove(); // Cleanup map on unmount
//   //     };
//   //   }
//   // }, []);
//   return (
//     <main className="d w-[100%] h-[10vh] z-1">
//       {/*leaflet and react-leaflet*/}
//       <div>
//         <MapContainer center={[40.609787846393196, 20.7890265133657]} zoom={5}>
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           <CircleMarker
//             className="n w-[150px] h-[150px]"
//             center={[40.609787846393196, 20.7890265133657]}
//             radius={10}
//             color="transparent"
//             fillColor="green"
//             fillOpacity={0.5}
//           >
//             <Popup className="w-[460px] h-[150px]">
//               <p className="text-[25px]">My Location </p>
//             </Popup>
//           </CircleMarker>
//         </MapContainer>
//       </div>
//     </main>
//   );
// }

// export default Map;

// // "use client";
// // import React from "react";
// // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// // import Pin from "./Pin";

// // const Map = ({ items }) => {
// //   return (
// //     <div className="">
// //       <MapContainer
// //         center={
// //           items?.length === 1
// //             ? [items[0]?.latitude, items[0]?.longitude]
// //             : [51.505, -0.09]
// //         }
// //         zoom={7}
// //         scrollWheelZoom={false}
// //         className="h-full w-full  rounded-lg border "
// //       >
// //         <TileLayer
// //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />
// //         {items?.map((item) => (
// //           <Pin item={item} key={item.id} />
// //         ))}
// //       </MapContainer>
// //     </div>
// //   );
// // };

// // export default Map;
