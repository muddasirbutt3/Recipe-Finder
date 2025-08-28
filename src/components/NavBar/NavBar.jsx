import React from "react";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ favRecipe, setFavRecipe }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={handleClick}>
        <img src="/images/logo.jpg" alt="" className={styles.img} />
        <p>Recipe Finder</p>
      </div>
      <div className={styles.links}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#e67e22" : "#555",
          })}
          to="/"
          className={styles.link}
        >
          Home
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
        <NavLink to="/favorites" className={styles.link}>
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
