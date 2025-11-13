import styles from "./Teaser.module.css";

type Props = { headline: string };

export const Teaser = (props: Props) => {
  return (
    <section className={styles.teaser}>
      <h1>{props.headline}</h1>
    </section>
  );
};
