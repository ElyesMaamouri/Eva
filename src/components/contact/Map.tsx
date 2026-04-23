"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './contact.module.css';

// Custom EVA Brand Marker Icon
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div class="marker-bounce" style="
        background: var(--primary-gradient);
        width: 35px;
        height: 35px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(173, 38, 227, 0.4);
        border: 2px solid white;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
      <style>
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(-45deg); }
          50% { transform: translateY(-15px) rotate(-45deg); }
        }
        .marker-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      </style>
    `,
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
  });
};

const Map = () => {
  const position: [number, number] = [49.2583, 4.0317]; // Coordinates for Reims

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={createCustomIcon()}>
          <Popup>
            EVA Studio <br /> Reims, France.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
