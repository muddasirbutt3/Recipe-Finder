import React from "react";
import styles from "./ServerError.module.css";

function ServerError({ message }) {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorBox}>
        <h2>⚠ Oops!</h2>
        <p>{message || "Something went wrong. Please try again later."}</p>
        <small>Possible reason: API request limit reached (50 per day)</small>
      </div>
    </div>
  );
}

export default ServerError;
