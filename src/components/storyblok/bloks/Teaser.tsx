import type { Content } from "../../../storyblok/types";
import styles from "./Teaser.module.css";

import { AnimatePresence, motion } from "motion/react";
type Props = Content & { headline?: string };

const headerAnimation = {
  initial: { opacity: 0.2, top: "-40px" },
  whileInView: { opacity: 1, top: 0 },
  exit: { top: 200 },
};
export const Teaser = (props: Props) => {
  return (
    <section className={styles.teaser}>
      <AnimatePresence>
        <motion.h1 {...headerAnimation}>{props.headline}</motion.h1>
      </AnimatePresence>
    </section>
  );
};
