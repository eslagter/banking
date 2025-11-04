import { Link } from "react-router";

import styles from "./Navigation.module.css";
import { FaLock } from "react-icons/fa";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <nav>
        <Link to="/" end className={styles.dashLink}>
          <span className={styles.homeIcon}>b</span>
          dash
        </Link>

        <Link to="/login" className={styles.sessionLink}>
          <FaLock />
          Login
        </Link>
      </nav>
    </div>
  );
};
