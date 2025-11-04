import { Outlet } from "react-router";
import { Navigation } from "../../Navigation/Navigation";

import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />

      {/* route specific content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
