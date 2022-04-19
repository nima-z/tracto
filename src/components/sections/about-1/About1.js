import Banner from "../../banner/Banner";

import styles from "./About1.module.css";

export default function About1() {
  return (
    <section className={styles.banner}>
      <Banner
        header="Helping digital products"
        text="Tracto is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
      >
        We are on a <br /> Mission
      </Banner>
    </section>
  );
}
