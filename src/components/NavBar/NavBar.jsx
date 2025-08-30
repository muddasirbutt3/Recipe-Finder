import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/images/logo.jpg" alt="logo" className={styles.img} />
        <span className={styles.brand}>Recipe Finder</span>
      </div>

      {/* Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.activeHam : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}


export default NavBar;
