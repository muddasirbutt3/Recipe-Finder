import styles from "./NoResults.module.css";

function NoResults() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>No Recipes Found</h2>
        <p>Try searching with a different name or ingredient.</p>
      </div>
    </div>
  );
}
export default NoResults;
