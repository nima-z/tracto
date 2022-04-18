import React from "react";
import Logo from "../../UI/icons/Logo";
import Spacer from "../../UI/Spacer";
import Navigation from "../navigation/Navigation";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Navigation />
      <Spacer />
      <div className={styles.action}>button</div>
    </div>
  );
}
