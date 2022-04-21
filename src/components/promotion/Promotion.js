import styles from "./Promotion.module.css";
import H2 from "../ui/H2/H2";
import BodyReg from "../ui/body-reg/BodyReg";
import Subscription from "../ui/Subscription/Subscription";

export default function Promotion() {
  return (
    <div className={styles.container}>
      <img src="/images/promotion.png" alt="circles" />
      <div className={styles.content}>
        <H2>The workplace for remote contracts gigs.</H2>
        <BodyReg>For Choosing the best way of Contract</BodyReg>
        <Subscription />
      </div>
    </div>
  );
}
