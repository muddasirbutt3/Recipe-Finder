import React from "react";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ favRecipe, setFavRecipe }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.logo} onClick={handleClick}>
        <img src="/images/logo.jpg" alt="logo" className={styles.img} />
        <span className={styles.brand}>Recipe Finder</span>
      </div>

      {/* Right - Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
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
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
