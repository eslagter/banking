import styles from "./DashboardIndex.module.css";

export const DashboardIndex = () => {
  return (
    <div className={styles.grid}>
      <h2>Your account summary as on {new Date().toLocaleDateString()}</h2>
    </div>
  );
};
