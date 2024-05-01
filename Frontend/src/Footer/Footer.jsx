import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="Sections Top">
        <ul>
          <li>About US</li>
          <li>Products</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="Sections Middle">
        <ul>
          <li>
            <i className="bi bi-instagram"></i>
          </li>
          <li>
            <i className="bi bi-whatsapp"></i>
          </li>
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-telegram"></i>
          </li>
        </ul>
      </div>
      <div className="Sections Last">&copy; E-Commerse For Your Live Style</div>
    </footer>
  );
}
