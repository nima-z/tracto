import styles from "./BodyReg.module.css";

export default function BodyReg({ children }) {
  return <p className={styles.bodyReg}>{children}</p>;
}
