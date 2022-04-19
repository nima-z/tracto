import React, { Fragment } from "react";
import Section2 from "../components/sections/section-2/Section2";
import Banner from "../components/banner/Banner";
import Subscription from "../components/ui/Subscription/Subscription";
import styles from "./Homepage.module.css";
import Section3 from "../components/sections/section-3/Section3";
export default function HomePage() {
  return (
    <Fragment>
      <section className={styles.banner}>
        <Banner
          header="Helping digital products"
          text="Tracto is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
        >
          The workplace for remote contracts gigs.
        </Banner>
        <Subscription />
      </section>

      <Section2 />
      <Section3 />
    </Fragment>
  );
}
