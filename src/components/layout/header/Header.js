import Logo from "../../ui/icons/Logo";
import Navigation from "../navigation/Navigation";
import PrimaryButton from "../../ui/primary-button/PrimaryButton";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Navigation />
      <div className={styles.action}>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
}
