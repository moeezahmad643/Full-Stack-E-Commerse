import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav>
        <img src={logo} alt="" />

        <ol>
          <ul>
            {isSmallScreen ? (
              <>
                <li onClick={handleMenu}>
                  <i className="bi bi-list"></i>
                </li>
                {menu ? (
                  <div className="text-list">
                    <Link className="link" to="/">
                      Home
                    </Link>
                    <Link className="link" to="/product">
                      Products
                    </Link>
                    <Link className="link" to="about">
                      About
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <Link className="link" to="/product">
                    Products
                  </Link>
                  <Link className="link" to="about">
                    About
                  </Link>
              </>
            )}
          </ul>

          <ul>
              <Link className="link" to="/cart">
                <i className="bi bi-bag-check-fill"></i>
              </Link>
              <Link className="link" to="/user">
                <i className="bi bi-person-circle"></i>
              </Link>
          </ul>
        </ol>
      </nav>
    </div>
  );
}
