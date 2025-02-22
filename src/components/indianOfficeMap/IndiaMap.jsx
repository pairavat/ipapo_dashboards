import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Ensure the default marker icon is set
const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const IndiaMap = () => {
  const locations = [
    { name: "Nagpur", coords: [21.1458, 79.0882] },
    { name: "Mumbai", coords: [19.076, 72.8777] },
    { name: "Ahmedabad", coords: [23.0225, 72.5714] },
    { name: "Bangalore", coords: [12.9716, 77.5946] },
  ];

  return (
    <div style={{ width: "350px", height: "350px" }}>
      <MapContainer
        center={[22.3511, 78.6677]} // Center of India
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.coords} icon={defaultIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
