import styles from "./Load.module.css";
function Load() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles["first-box"]}>
          <div className={styles["second-box"]}></div>
          <div className={styles["third-box"]}>
            <div className={styles["fourth-box"]}>
              <div className={styles["fifth-box"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Load;
