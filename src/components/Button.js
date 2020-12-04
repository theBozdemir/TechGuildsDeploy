import React from "react";
import "./CSS/Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <>
      <Link to="call-to-action">
        <button className="btn1">
          <h2>Call To Action</h2>
        </button>
      </Link>
    </>
  );
}
