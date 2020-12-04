import React from "react";
import "./CSS/Location.css";
import Map from "./images/map.png";

function Location() {
  return (
    <div className="googlemaps">
      <img src={Map} alt="map" />
      <div className="map-text-container">
        <h1>WE ARE HERE</h1>
        <ul className="part1">
          <li>engage@techguilds.com</li>
          <li>+1 877 317 4118(toll free)</li>
          <li>+1 647 317 4118</li>
        </ul>
        <ul className="part2">
          <li>5353 Dundas St. W. #510</li>
          <li>Toronto, ON M9B6H8</li>
          <li>Canada</li>
        </ul>
      </div>
    </div>
  );
}

export default Location;
