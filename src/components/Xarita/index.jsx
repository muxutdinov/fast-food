import React from "react";
import { Navcon } from "./style";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export const Xarita = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDqw3adF1rAFs5-n2G1Emu4Z90ce31tOto",
    id: "fast - food",
  });

  return (
    <div>
      <Navcon/>
      <GoogleMap
        zoom={12}
        center={{ lat: 41.2995, lng: 69.2401 }}
        mapContainerStyle={{ width: "1100px", height: "700px" }}
      >
        <Marker position={{ lat: 41.0995, lng: 69.0401 }} />
        <Marker position={{ lat: 41.1995, lng: 69.1401 }} />
        <Marker position={{ lat: 41.3995, lng: 69.3401 }} />
      </GoogleMap>
    </div>
  );
};

export default Xarita;
