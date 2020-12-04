import React from "react";
import "./CSS/Button.css";
import { Link } from "react-router-dom";

export function Button3() {
  return (
    <>
      <Link to="call-to-action">
        <button className="btn3">Call To Action</button>
      </Link>
    </>
  );
}
