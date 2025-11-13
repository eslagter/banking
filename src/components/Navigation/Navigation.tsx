import { Link } from "react-router";

import styles from "./Navigation.module.css";
import { FaLock } from "react-icons/fa";
import type { Link as SBLink } from "../../storyblok/types";

interface Props {
  links?: SBLink[];
}

export const Navigation = ({ links }: Props) => {
  return (
    <div className={styles.navigation}>
      <nav>
        <Link to="/" className={styles.dashLink}>
          <span className={styles.homeIcon}>b</span>
          dash
        </Link>

        {links?.map((link) => (
          <Link key={link.id} to={link.slug}>
            {link.name}
          </Link>
        ))}

        <Link to="/login" className={styles.sessionLink}>
          <FaLock />
          Login
        </Link>
      </nav>
    </div>
  );
};
