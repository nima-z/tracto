import styles from "./InfoItems.module.css";
import Chart from "../../../ui/icons/Chart";
import Money from "../../../ui/icons/Money";
import Tags from "../../../ui/icons/Tags";

export default function InfoItem({ icon, title, desc }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <Chart />
        </div>
        <div className={styles.info}>
          <h2>35x</h2>
          <p>Efficient than any Local Means</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <Money />
        </div>
        <div className={styles.info}>
          <h2>$0.00</h2>
          <p>For Choosing the best way of Contract</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <Tags />
        </div>
        <div className={styles.info}>
          <h2>0%</h2>
          <p>For Choosing the best way of Contract</p>
        </div>
      </div>
    </div>
  );
}
