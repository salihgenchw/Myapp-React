import React from "react";
import JsLogo from "../images/jslogo.png";
import '../css/TopSekme.css';

function TopSekme() {
  return (
    <div className="container-fluid mt-1">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="/"
            style={{ textDecoration: "none", color: "gray", padding: "10px" }}
          >
            <img
              className="mb-1"
              src={JsLogo}
              alt="jslogo"
              style={{ width: "1rem" }}
            />
            <span className="ms-2">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            style={{ textDecoration: "none", color: "gray", padding: "10px" }}
          >
            <img
              className="mb-1"
              src={JsLogo}
              alt="jslogo"
              style={{ width: "1rem" }}
            />
            <span className="ms-2">Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            style={{ textDecoration: "none", color: "gray", padding: "10px" }}
          >
            <img
              className="mb-1"
              src={JsLogo}
              alt="jslogo"
              style={{ width: "1rem" }}
            />
            <span className="ms-2">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            style={{ textDecoration: "none", color: "gray", padding: "10px" }}
          >
            <img
              className="mb-1"
              src={JsLogo}
              alt="jslogo"
              style={{ width: "1rem" }}
            />
            <span className="ms-2">Landing Page</span>
          </a>
        </li>
      </ul>
      
    </div>
  );
}

export default TopSekme;
