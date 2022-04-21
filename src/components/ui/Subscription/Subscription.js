import PrimaryButton from "../primary-button/PrimaryButton";
import styles from "./Subscription.module.css";
export default function Subscription({ onSubscribe }) {
  return (
    <div className={styles.container}>
      <input placeholder="Enter Email Address" />
      <PrimaryButton onClick={onSubscribe}>Get Started</PrimaryButton>
    </div>
  );
}
