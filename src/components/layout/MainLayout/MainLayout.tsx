import { Outlet, useParams } from "react-router";
import { Navigation } from "../../Navigation/Navigation";

import styles from "./MainLayout.module.css";
import { usePage } from "../../../storyblok/usePage";

export const MainLayout = () => {
  const { "*": slug } = useParams();
  const { links } = usePage(slug);

  return (
    <div className={styles.layout}>
      <Navigation links={links} />

      {/* route specific content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
