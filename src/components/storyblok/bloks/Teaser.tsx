import type { TeaserComponent } from "../../../storyblok/types";
import styles from "./Teaser.module.css";
import { motion } from "motion/react";

const headerAnimation = {
  initial: { opacity: 0.2, top: "-40px" },
  whileInView: { opacity: 1, top: 0 },
};

const Teaser = (props: TeaserComponent) => (
  <section className={styles.teaser}>
    <motion.h1 {...headerAnimation}>{props.headline}</motion.h1>
  </section>
);

export default Teaser;
