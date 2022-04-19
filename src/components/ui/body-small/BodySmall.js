import styles from "./BodySmall.module.css";
export default function BodySmall({ children }) {
  return <p className={styles.bodySmall}>{children}</p>;
}
