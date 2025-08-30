import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}
export default Loader;
