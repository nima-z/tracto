import Banner from "../../banner/Banner";
import Subscription from "../../ui/Subscription/Subscription";

import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <section className={styles.banner}>
      <Banner
        header="Helping digital products"
        text="Tracto is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
      >
        The workplace for remote contracts gigs.
      </Banner>
      <Subscription />
      <div className={styles.floatImage}>
        <img src="/images/SignUp.png" alt="signup" />
      </div>
    </section>
  );
}
